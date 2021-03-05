//a) Create an interface to describe a function: myFunc that should take three string parameters and return a String Array.
interface myFunc {
    (a: string, b: string, c: string): string[];
}

//b) Design a function "implementing" this interface which returns an array with the three strings
let f1 : myFunc
f1 = function (a:string, b:string, c:string) {
    return [a, b, c]
}

//c) Design another implementation that returns an array, with the three strings uppercased.
function upperCased(a:string, b:string, c:string, d:string) {
    let array = [a, b, c]
    array.forEach(element => {
        element.toUpperCase();
    });
    return array;
}


//e) Test f2 with the two implementations created in b+c.
let f2 = function logger(f: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f(a,b,c));
}

f2(f1)


//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
// -> f2(upperCased) FAILS: upperCased has d:string as parameter, which is not in interface