// console.log(3 + 2 * 30 - 100 / 2); // 13

// console.log(typeof ({})) // object

// console.log(typeof ([])) //object

// console.log(typeof ("")) //string

// console.log(typeof (undefined))  //undefined

// console.log(typeof (null)) // object 

// console.log(typeof (NaN)) //number

// console.log(3 + 40 * 20 - 50 / 2); // 778

// console.log(typeof (2))  // number

// console.log(typeof (true)) //boolean

// console.log(typeof function myfun() { }) //function

// console.log(typeof ("dhruvi")) //string

// console.log(typeof (x)) //undefined

// let a;
// console.log(a + " , " + typeof (a)); // undefined , undefined

// let b = "";
// console.log(b + " , " + typeof (b)); // ""[empty string] , string

// let traniee = {
//     firstName: "dhruvi", lastName: "patel",
//     age: 50, eyeColor: "blue"
// };
// traniee = null;
// console.log(traniee + " , " + typeof (traniee))   // null , object

// let traniee1 = {
//     firstName: "dhruvi", lastName: "patel",
//     age: 50, eyeColor: "blue"
// };
// traniee1 = undefined;
// console.log(traniee1 + " , " + typeof (traniee1))   // undefined , undefined

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


// if (null == undefined) {
//     console.log("true");
// } else {
//     console.log("false");
// }                        // true (banne ni value same che)

// console.log(typeof (null == undefined)) // true

// console.log(typeof (null === undefined)) //false

// if (null === undefined) {
//     console.log("true");
// } else {
//     console.log("false");
// }                        // false (value same che but data type same nathi atle)


// console.log(typeof (1 + "3" - "number" * 3)); // number
// console.log(typeof 1 + "3" - "number" * 3); // NaN(not a Number) NaN isa number that is not a legal number.
// console.log(typeof (1 + "3" - 4 * 3)); // number
// console.log(typeof "10" == 10) //boolean\


// console.log(!(false)) // true _bollean

// console.log(!4 === '4')  // flase
// console.log(!(4 === '4')) //true

// console.log(0 == '') //true[value banne ni falsy che atle]
// console.log(0 === '') //false[type banne ni alag che atle]

// console.log(1 === true)  //false[type banne ni alag che atle]
// console.log(1 == true)  //true[value banne ni truly che atle]


// console.log(1 + 0 - 'k' - 2 * 5); //NaN



// x = 30;
// x = " vidhi"
// console.log(x) // vidhi

// let nm = 'dhruvi';
// let name1 = new String("vidhi");
// console.log(typeof name1);  // object
// console.log(nm);    // dhruvi
// console.log(name1);   // [String: 'vidhi']



// // compare two object 

// let nm1 = new String("vidhi")
// let nm2 = new String(" vidhi ")
// console.log(nm1 == nm2)   // False [ compare two javascript object is always returns false.] [In JS String Chapater]


// console.log(10 - 2 * 5 + (10 / 2) * 7); //35
// console.log(50 + 2 * 50 / (4 + 5)); //  61.12
// console.log(7.5 * 4 - "20" + 50 / 20); //12.5


// console.log("1" + 1 - 0 * 5 * 10 - 1 + "0" + 5); // 1005 [jetla operation perform thata hoy a kari devana]


// console.log("4" + 2 * 3 - "30" + 4 / 2);  // 18


// // console.log("4" - 22);//18
// // console.log("5" + 5);//55

// console.log(3 * (4 + 2) / 2 - "1" + 2); // 10
// console.log(3 * (4 + 2) / 2 + "1" + 2); // 912

// console.log("20" + (25 + 2) / 3 - 8 / (2 * 3)); //207.67 [ 2 value  ni vachhe +  operator che atle a concatenate kari de che ]
// console.log("20" - (25 + 2) / 3 - 8 / (2 * 3)); // 9.66 [ 2 value ni vachhe -,*,/ operator che atle a string ne pela number ma convert kari ne operation perform karse.]
// console.log("20" * (25 + 2) / 3 - 8 / (2 * 3)); // 178.67
// console.log("20" / (25 + 2) / 3 - 8 / (2 * 3)); // -1.086



// console.log(1 + 1 - 1 + "1" * 1 / 1 - 0 * 0); // 2 
// console.log(1 + 1 - 1 + "1" + 1 / 1 - 0 * 0); // 111

// console.log(1 + 1 - 1 + "A" * 1 / 1 - 0 * 0); // NaN

// console.log("1" + 1 - 0 * "a" * 10 - 1 + "0" + 5); //NaN05


// let d = 5;
// if (d > 4 && d <= 2) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// let nm3 = 5;
// let nm4 = 2;
// let st1 = "hello"

// console.log(nm3 >= 5); //true
// console.log(nm4 <= 3); //true
// console.log(nm3 === 5); // true
// console.log(nm3 > 5); //false
// console.log(nm4 == '2'); // true
// console.log(st1 == 'Hello');  //false


// console.log(33 + 44 + 55 - 77 - "88" * 99); // -8657


// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))


// console.log(0 === '')
// console.log(1 === 0) // value same nathi.
// console.log('mango'.length == 'avocado'.length)
// console.log(typeof NaN)


// let nm5 = 10;
// nm5 &&= 50;
// console.log(nm5); // 50

// //ternary operator 
// // ternary operator is conditional operator. 
// //whis assign value to variable based on condition.
// let age = 20;
// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);


// //Logical assignment operator
// //1 logical AND Assignment 
// // first value is true than return second value in output.
// let nm6 = 10;  // num6 = 0 [is false] than return 0 in output
// nm6 &&= 5;
// console.log(nm6);

// //2 logical OR assignment operator
// // first value is false than return second value in output.
// let nm7 = 0;  //num7 = 10 [is true] than return 10 in output
// nm7 &&= 5;
// console.log(nm7);

// //3 logical nullish Assignment
// //// first value is null or undefined than return second value in output.
// let nm8; // num8 = 0 [is not null or undefined] than return 2 value in output
// nm8 &&= 5;
// console.log(nm8);

// let e = null;
// let text = "missing";
// let result = e ?? text;
// console.log("name of student is "+ result);

// console.log("A" < "B") // true
// console.log("D" < "K"); // true
// console.log("54" < "84"); // true
// console.log("84" > "64"); // true
// console.log("2" < "12"); //false
// console.log("84" < "54"); //false
// console.log("64" > "84"); // false


// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car?.name);

// //console.log(1 ==== 0) throw syntax error

// //console.log(typeof ()); syntax error

// let y = "hello";
// console.log(typeof(y)) //string



// let abc = "";
// console.log(typeof(abc)); // value = ""  and typeof = string

// let abcd;
// console.log(typeof(abcd)); // value = undefined and typeof = undefined 

// let person = {nme : "dhruvi" , age : 23}
// console.log(typeof(person)+" , value =  "+ person); // object , value = {nme : "dhruvi" , age : 23}
// person = null;
// console.log(typeof(person)+" , value =  "+ person); // object , null


console.log(typeof(1 + "1" -1 - 0 *5));

console.log(typeof(1-1-0*5));

console.log(typeof(undefined)); // undefined

console.log(typeof(null+"null"+null)); //string


console.log(typeof({} + null + undefined + 0 + true)); //  undefine ne 0 number consider kare che true ne bhi 1 consider karvani che 
// atle output string avyu.

console.log(typeof({} + null + undefined + 0 + true - "a")); // typeof(NaN) avse atle typeof number avse.


console.log(typeof({} + {} - true + 0 * [] )); //number
console.log(typeof({} + {} + true + 0 * [] )); //String


console.log({} * 5 + true + {} + "j" + 5 * 0); //NaNj0

console.log(NaN * 5 ); 
console.log(NaN + true); //number

console.log({} + "dhruvi"); //

// console.log(typeof(object + {} + true + 0 * [] ));//error