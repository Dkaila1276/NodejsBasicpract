// const a = [1,2,3,4,5]

// try{

//     console.log(a);
//     if (a instanceof Object) throw "False";
// }catch (err) {
//     console.log("Error is " + err);
// }finally{
//     console.log("Program done.");
// }


// console.log(decodeURI("https://www.educative.io/shoteditor"))

// console.log(decodeURI("%sdfk")); //URI error

// eval("alert('dp)");  //syntaxerror
// console.log(a.toUppercase()); //TypeError
// console.log(b); //ReferenceError
// let num = 1;
// console.log(num.toPrecision(500)); // range error


// // Whole-script strict mode syntax
// "use strict";
// let v = "Hi! I'm a strict mode script!";

// console.log(v);

function myStrictFunction() {
    // Function-level strict mode syntax
    "use strict";
    function nested() {
      return "Dhruvi Patel";
    }
    return `Hi! My name is  ${nested()}`;
  }
  function myNotStrictFunction() {
    return "I'm not Dhruvi patel.";
  }
  