// const a = ["D" , "A" , "P" , "J" , "S" ];

// console.log(a[0]);
// a[2] = "K";
// console.log(a);
// console.log(a.length);
// console.log(a.toString());
// console.log(a.sort());
// console.log(a[a.length-1]);


// //For Loop

// let txt = "";
// for(let i = 0 ; i < a.length ; i ++) 
// {
//      txt += `${a[i]}`+"\n"; 
// }

// console.log(txt);

// //ForEach Loop

// let txt1 = " ";
// a.forEach(myfunction);
// function myfunction(value){
//     txt1 += `${value} \n`
// }
// console.log(txt1);

// //Push()

// a.push("R");
// console.log(a);
// a[a.length] = "AA";
// console.log(a); //array ma element add kari ne apse.
// console.log(a.push("BB")); // array nilength apse

// //Pop()

// a.pop();
// console.log(a); //delete thaya pachi array apse.
// console.log(a.pop());//kyo element delete thayo a batavse

// //How do I know if a variable is an array

// let y = Array.isArray(a);
// let z = a instanceof Array;
// console.log(y);
// console.log(z);


// //Shift()
// a.shift()
// console.log(a); // 1st remover thai ne bija ne left side shift karse.
// console.log(a.shift()); // kyo element remove thyo a apse 

// //unshift
// a.unshift("Q");
// console.log(a);  //array ma beginnning ma element add karse
// console.log(a.unshift("RR")); // element add thi ne new array ni legnth apse.
// console.log(a);

// //Delete element

// delete a[0];
// console.log(a); // undefine or emplty item apse  . that's why better to use pop().


// //Concat 

// const b = ["10" , "20" , "30"];
// const c = a.concat(b);
// console.log(c);

// //flat()
// const x = [[1,2],[3,4],[5,6],[7,8]];
// console.log(x);
// const y1 = x.flat();
// console.log(y1);

// //Splice()

// const myarr = ["xyz" , "ABC" , "12" ,"20"]
// console.log(myarr);

// const f = myarr.entries();
// let txt4 = "";
// for(let x of f)
// {
//     txt4 += x +"\n";
// }
// console.log(txt4);


// myarr.splice(2,1,"40","Dhruvi");
// console.log(myarr);

// //Slice()

// const array = [10 ,20 , 30 , 40 ,50,60,70,80,90]
// console.log(array);
// const array1 = array.slice(2);
// console.log(array1); 
// const array2 = array.slice(1,4); // 1st argu ni lese and 2 argu na agad vadi value sudhi apse.
// console.log(array2);

// //sort() and Reverse()
// a.sort();
// console.log(a);
// a.reverse();
// console.log(a);

// //numeric sort()

// const number = [10,40,20,100,30];
// console.log(number);


// // includes()

// const check = number.includes(50);
// console.log(check); // check karva mate string arrayma che ke nai.

// //flatMap()
// const number1 = [[1,3],[4,6],[5,10]]
// const myarray5 = number1.flat().flatMap((x) => x * 2);
// console.log(myarray5);

// number.sort(function(a,b){return a-b});
// console.log(number);
// number.sort(function(a,b){return b - a});
// console.log(number);
// number.sort(function(){return 0.5 - Math.random()});
// console.log(number);
// const a3 =  Math.max.apply(null,number);
// console.log(a3);
// const a4 =  Math.min.apply(null,number);
// console.log(a4);


// //Every()

// const num = number.every(checknum)

// function checknum(num) {
//   return num > 5;
// }
// console.log(num);


// //filter
// const num1 = number.filter(checknum1)

// function checknum1(num1){
//     return num1 < 20;
// }
// console.log(num1); //[20]

// const num2 = number.find(checknum1);
// console.log(num2);

// const num3 = number.findIndex(checknum1);
// console.log(num3);

// //Storing array object
// const person = [
//     {type:"Sakshi", age:17},
//     {type:"Dhruvi", age:23},
//     {type:"Ayush", age:19}
//   ];

//   const person1 =  person.sort(function(a, b){return a.age - b.age});
//   console.log(person1);


// //from()

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr);

// //Reduce()
// const array4 = [3,4,6,7,8]
// let sub = array4.reduce(myFunction);

// function myFunction(total , value){
//     return total - value;
// }

// console.log(sub);


// //flatMap()
// const number2 = [[1,3],[4,6,5,10]]
// const myarray6 = number2.flatMap((x) => x );
// const array01 = [1,2,3,4,5,[10,20,30,[40,50]]]
// console.log(array01[5][3][0]);
// console.log(myarray6);



// const a1 = [[20,30],[40,50,60,70],[1,2,3]]
// const a2 = a1.flat().filter(myfunction)
// function myfunction(value){
//     return value == 60; 
// }
// console.log(a2);

// const a5 = a1.flat();
// console.log(a5[4]);
// console.log(a5.length-3);



// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";
// console.log(fruits);


const a = [2, 3, 4, 5, [6, 7], [8, 9]]
console.log(a.flatMap(function (i) { return i * 2 }));