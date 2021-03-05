// Denne video viser det hele: https://www.youtube.com/watch?v=zE9iro4r918
// Lars video: https://www.youtube.com/watch?v=FkTgvvYjuUo&list=PLDbigcKhXkiUejrtlOwHBmmHxfoJ0h22g&index=3

//How does this in JavaScript differ from this in Java?
/*
    In JavaScript "this" always refers to the owner of the function we are executing,
    or rather the object that a function is a method of.

    In Java,  "this" refers to the current instance object on which the method i executed.

*/

// The purpose of call(), apply() and bind()
/*
    call() pass in argument one by one, so "this" is going to reference the argument given in .call()

    apply() is the same as .call(), but can pass in an array of arguments, instead of argument on by one.

    bind() returns a new functions, which is bound to the argument (like the example below).

*/


//Example of the use of bind()
const greeter = function () {
    console.log(this.message)
};

let comp1 = { message: "Hello World" };
let comp2 = { message: "Hi there" };

let g1 = greeter.bind(comp1);
let g2 = greeter.bind(comp2);

g1();
g2();