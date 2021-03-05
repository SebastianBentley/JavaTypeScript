const fetch = require('node-fetch')

//Should have .catch after each then
function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    try {
        const info = new Promise(function (resolve, reject) {
            resolve(
                fetch(`https://swapi.dev/api/people/${id}/`).then(res => res.json())
                    .then(person => console.log("Name: " + person.name) + fetch(person.films[0]).then(res => res.json())
                        .then(film => console.log("Film: " + film.title) + fetch(film.species[0]).then(res => res.json())
                            .then(species => console.log("Species: " + species.name) + fetch(species.homeworld).then(res => res.json())
                                .then(homeworld => console.log("Homeworld: " + homeworld.name))
                            )
                        )
                    )
            )
        })
        return info



    } catch (err) {
        console.log(err)
    }


}

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    try {
        const name = await fetch(`https://swapi.dev/api/people/${id}/`).then(res => res.json());
        const film = await fetch(name.films[0]).then(res => res.json());
        const species = await fetch(film.species[0]).then(res => res.json());
        const planet = await fetch(species.homeworld).then(res => res.json());
        return `Name: ${name.name}\nTitle: ${film.title}\nSpecie: ${species.name}\nPlanet: ${planet.name}`
    } catch (err) {
        console.log(err)
    }
}

async function test() {
    const swInfo = await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
    console.log(swInfo);
}
test();


