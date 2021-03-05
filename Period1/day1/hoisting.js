//Lars Video: https://www.youtube.com/watch?v=8LUEREHnjOU&list=PLDbigcKhXkiUejrtlOwHBmmHxfoJ0h22g&index=1

function hoisting(){
    f1();
    f2();

    function f1(){
        console.log("I'm f1");
    }

    var f2 = function() {
        console.log("Yes, but I'm f2");
    }
}

hoisting();

//This will result in an error, since f2 is lifted, but only the declaration of f2,
// but not the function of f2.
//f1 will always be hoisted to the start of the function, and therefor works.