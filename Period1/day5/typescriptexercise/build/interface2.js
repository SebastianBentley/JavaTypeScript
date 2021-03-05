"use strict";
//b) Design a function "implementing" this interface which returns an array with the three strings
function f1(a, b, c) {
    return [a, b, c];
}
//c) Design another implementation that returns an array, with the three strings uppercased.
function upperCased(a, b, c, d) {
    let array = [a, b, c];
    array.forEach(element => {
        element.toUpperCase();
    });
    return array;
}
//e) Test f2 with the two implementations created in b+c.
let f2 = function logger(f) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f(a, b, c));
};
f2(f1);
//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
// -> f2(upperCased) FAILS: upperCased has d:string as parameter, which is not in interface
//# sourceMappingURL=interface2.js.map