// a) Using the join function
var all = ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join())
console.log(all.join(" "))
console.log(all.join("#"))
console.log(all.join("-"))

// b) using reducer functions
var numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer))

// c) reducer on members with name and age properties
let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Jannie", age: 25 },
    { name: "Martin", age: 22 },
]

const memberReducer = function (accumulator, member, index, arr) {
    let num = 0;
    arr.forEach(member => {
        num += member.age;
    });
    return num / arr.length;
}

console.log(members.reduce(memberReducer))


// d) System to count votes

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

const voteReducer = (acc, current, index, arr) => {
    var a = {}
    arr.forEach(element => {
        if (a[element]) {
            a[element] += 1;
        } else {
            a[element] = 1;  
        }
    });
    return a;
}

console.log(votes.reduce(voteReducer))