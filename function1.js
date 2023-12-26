// // // // // // let abc = (val) => {
// // // // // // return val +"" + "World";
// // // // // // };
// // // // // // // abc("hello");
// // // // // // console.log(abc("hello"));

// // // // // // var a =10;

// // // // // // console.log(a);
// // // // // // console.log(b);


// // // // // function abc (){
// // // // //     a = 30;
// // // // //     b = 20
// // // // //     console.log(b);
// // // // // }

// // // // // let c = abc();
// // // // // console.log(a);

// // // // function xyz () {

// // // //     for (let i = 0 ; i <5 ; i++)
// // // //     {
// // // //         console.log(i);
// // // //     }
// // // //     console.log(i);
// // // // }

// // // // xyz();



// // // let j = 20;
// // // var i = 10;

// // // function xyz (){
    
// // // let j = "1";
// // // i = "1";
// // //  j += 20;
// // //  i+= 20;

// // //  console.log(i+ "" + j); // 10 ,, 30,20
// // // }

// // // xyz();
// // // console.log(i+ "" + j); //10,20


// abc = (a,b) => a+b;
// let x = abc(3,3);
// console.log(x);


// xyz = num => 5 + num;
// let y = xyz(5);
// console.log(y);

// const a = (num1) => console.log(num1 * 2);
// a(5);

// // rest parameter (...)
// function sum(...args){
//     let sum = 0 ;
//     for (let arg of args) sum += arg;
//     return sum;
// }

// let sum1 = sum(2,3,4,10);
// console.log(sum1);

// //findmax()

// let num1 = findMax(20,4,30,50,10);

// function findMax() {
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     console.log(max);
//   } 

//   const person = {
//     fullName : "Dhruvi Patel",
//     age : 23,
//     villege : "mubarakpura",
//     info : function(){
//         console.log(this.fullName + " is " + this.age + " years old.");
//     }
//   }
//   person.info();

  
// function info1(arg1,arg2){
//     this.fullName = arg1;
//     this.age =arg2;
// }
//   const person1 = new info1("Ankur Patel",24);
//   const person2 = new info1("Ankur Kaila",24);
//  console.log(person1.fullName);
//  console.log(person2.fullName);

//  const person4 = {
//     info2 : function(){
//         return this.fullName + " is " + this.age + " years old.";
//     }
//   }

//   const prsn = {
//     fullName : "Dhruvi Patel",
//     age : 23
//   }
  
//   const prsn1 = {
//     fullName : "Ayush patel",
//     age : 19
//   } 

//   const prsn2 = {
//     fullName : "Sakshi patel",
//     age : 16
//   } 
  
 
//  console.log(person4.info2.call(prsn));
//  console.log(person4.info2.apply(prsn1));

//  //Bind()
//  let bnd = person4.info2.bind(prsn2);
//  console.log(bnd());

//  let display = person4.info2.bind(prsn);
//  console.log(display());


setTimeout(add,6000)

 function add() {
    let a = 10;
    function plus() {
        a += 10;
    }
    plus();  
    console.log(a); 
  }

  console.log("My age is ");