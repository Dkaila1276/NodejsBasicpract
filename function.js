// // // // // // Regular function

// // // // // function add(x,y){
// // // // //     return x + y;
// // // // // }

// // // // // let a = add(5,5);
// // // // // console.log(a);

// // // // // //Anonymous function

// // // // // var ab = function (z,w) {
// // // // //     return z + w;
// // // // // }
// // // // // console.log(ab(4,4));

// // // // // //Arrow Function
// // // // // const abc = (x4, y4) => x4 * y4;
// // // // // let abc2 = abc(4,5)
// // // // // console.log(abc2);


// // // // // // Function() Constructor
// // // // // const myFunction = new Function("a1", "b", "return a1 * b");

// // // // // let x1 = myFunction(5, 3);

// // // // // console.log(x1);

// // // // // //

// // // // // function person(Fname,Lname,age){
// // // // //   this.Fname = Fname,
// // // // //   this.Lname = Lname,
// // // // //   this.age = age

// // // // //   this.fullname = function(){
// // // // //     return this.Fname + " " + this.Lname;
// // // // //   };
// // // // // }

// // // // // const person1 = new person("Dhruvi" , "Patel" ,23);
// // // // // const person2 = new person("Ankur" , "Patel" , 24);

// // // // // console.log(person1.age);  //23
// // // // // console.log(person2.Fname); // "Ankur"
// // // // // console.log(person1.fullname()); // "Dhruvi Patel"
// // // // // console.log(person2.fullname()); // "Ankur Patel"

// // // // // //Hoisting

// // // // // //JavaScript functions can be called before they are declared:
// // // // // let x2 = myFunction1(3);

// // // // // function myFunction1(y1) {
// // // // //   return y1 * y1;
// // // // // }

// // // // // console.log(x2);

// // // // // //The Arguments Object
// // // // // function sumall() {
// // // // //   let sum = 0;
// // // // //   for(let i = 0; i < arguments.length; i++) {
// // // // //     sum += arguments[i];
// // // // //   }
// // // // //   return sum;
// // // // // } 

// // // // // console.log(sumall(15,5,5));


// // // // // //Global Object
// // // // // let abcd = myFunction1();
// // // // // function myFunction1() {
// // // // //   return this;
// // // // // }
// // // // // console.log(abcd);

// // // // // //
// // // // // const myObject = {
// // // // //   firstName:"John",
// // // // //   lastName: "Doe",
// // // // //   fullName: function () {
// // // // //     return this;
// // // // //   }
// // // // // }
// // // // // // This will return [object Object] (the owner object)
// // // // // console.log(myObject.fullName())



// // // // //For Of LOOP



// // // // console.log(text);


// // // // //Getter

// // // // const person = {
// // // //   firstName: "John",
// // // //   lastName: "Doe",
// // // //   language: "en",
// // // //   get lang() {
// // // //     return this.language;
// // // //   }
// // // // };

// // // // console.log(person.lang);

// // // // //Setter

// // // // const person1 = {
// // // //   firstName: "John",
// // // //   lastName: "Doe",
// // // //   language: "",
// // // //   set lang(lang) {
// // // //      this.language = lang;
// // // //   }
// // // // };

// // // // person1.lang="Gujarati";

// // // // console.log(person1.language);


// // // // const a = new Map([
// // // //   ["a",10],
// // // //   ["b",20]
// // // // ]);

// // // // console.log(typeof(Map)); //function
// // // // console.log(typeof(a)); //object


// // // //For in loop

// // // const person = {
// // //   name: "John",
// // //   age: 30,
// // //   city: "New York"
// // // };

// // // let txt = "";
// // // for (let x in person) {
// // // //   txt += person[x] + " ";
// // // // };

// // // // console.log(txt);

// // // function iterateObject() {
// // // 	let exampleObj = {
// // // 		book: "Sherlock Holmes",
// // // 		author: "Arthur Conan Doyle",
// // // 		genre: "Mystery"
// // // 	};

// // //   let txt = "";
// // // 	for (let x in exampleObj) {
// // //     txt += exampleObj[x] + " ";
// // // 		// if (exampleObj.hasOwnProperty(key)) {
// // // 		// 	value = exampleObj[key];
// // // 		// 	console.log(key, value);
// // // 		// }
// // // 	}
// // //   console.log(txt);
// // // }
// // // iterateObject();

// const a1 = [1,2,3]
// const b = [4,5,6]

// for(var i = 0 ; i < a1.length ; i++)
// {
//   for(var j = 0 ; j < b.length ; j++)
//   {
//     console.log(i,j);
//   }
// }

// const a = {
//   first : "a",
//   second : "b",
//   third : "c"
// }

// const myarray = Object.values(a);
// let txt = "";

// for (const x of myarray)
// {
//   txt += `${x} \n`
// }

// console.log(txt);

const abc = "code";

for(const i in abc)
{
  // console.log(abc[i]); // c/o/d/e
  // console.log(abc); // codecodecodecode
  console.log(i);// 3
}
