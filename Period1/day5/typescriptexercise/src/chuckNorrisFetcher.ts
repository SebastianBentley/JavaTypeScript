//install this: npm install node-fetch and npm install @types/node-fetch --save-dev
// -> --save-dev means, that it is only used, in development environment!

//Without changing ANYTHING in the highlighted part,
//add the necessary changes to get code-completion hints as indicated in this figure.

import fetch from "node-fetch";

interface chuckJoke {
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}


function chuckNorrisFetcher() : Promise<chuckJoke> {
    return fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => data)
}

async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value)
}

chuckNorrisTester()
