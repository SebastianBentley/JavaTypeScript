const URL = "https://swapi.dev/api/people/";
const fetch = require('node-fetch')
const now = require("performance-now")

function fetchPerson(url) {
    const name = fetch(url).then(res => res.json());
    return name;
}

async function printNames() {
    console.log("Before");
    var start = now()
    const person1 = await fetchPerson(URL + '1');
    const person2 = await fetchPerson(URL + '2');
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var end = now()
    console.log(start.toFixed(2))
    console.log((start - end).toFixed(2))
}



async function printNamesParallel() {
    const promises = []
    console.log("Before");
    var start = now()
    const person1 = fetchPerson(URL + '1');
    promises.push(person1)
    const person2 = fetchPerson(URL + '2');
    promises.push(person2)
 
    const all = await Promise.all(promises);
    all.forEach(name => {
        console.log("Name: " + name.name)
    });
    
    console.log("After all");
    var end = now()
    console.log(start.toFixed(2))
    console.log((start - end).toFixed(2))
}


//printNames()

printNamesParallel()