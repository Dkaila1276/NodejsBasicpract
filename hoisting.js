// // using var 
 
// // console.log(x);
// // var x = 3 ;

// var x = 20 ;

// const myObj = {
//     x: 50,
//     print: function() {
//        console.log(this.x);
//     }
//   }
  
//   myObj.print() // 50


// function greet(message) {
//    console.log(` my name is ${this.name}, ${message}.`);
//  }
 
//  const person = { name: "Dhruvi" };
//  const boundGreet = greet.bind(person, "Hi");
 
//  boundGreet(); // Outputs "Hi, my name is Dhruvi."


 let blog = {
   name: 'Tapas',
   address: 'freecodecamp',
   message: function() {
       console.log(`${this.name} blogs on ${this.address}`);
   }
};

blog.message();

// var a = 10 ;
// var b = 10 ;

// if(a < b )
// {
//    console.log("true");
// }
// else
// {
//    console.log("false");
// }


 