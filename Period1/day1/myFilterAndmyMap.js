// a) Make your own filter function 
let testArray = ["Hejsa", "Med", "Dig"];

function myFilter(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        if (newItem !== undefined) {
            arrayCopy.push(newItem);
        }
    });
    return arrayCopy;
}


//Compare with the real filter
console.log(testArray.filter(word => word.length < 4))

//Test homemade filter
console.log(myFilter(testArray, (a) => {
    if (a.length < 4) {
        return a;
    }
}))


// b) Make your own map function
function myMap(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        arrayCopy.push(newItem);
    });
    return arrayCopy;
}

//Compare with the real map
console.log(testArray.map(x => x + "..."))
console.log(myMap(testArray, (a) => {
    return a += "...";
}))

//3 Using The Prototype property
//Since this is something you should NEVER do, I chose not to.
/*Array.prototype.myFilter = function(){
    ...
}*/