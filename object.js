// // const car = {type:"Fiat", model:"500", color:"white"};
// // console.log(car["name"]);

// const person = { 
//     nam : "dhruvi",
//     age : 23,
//     lastname : "Patel",
//     ABC : function (){
//         return  "Full name is " + this.nam + " " + this.lastname;
//     }
// };
 
// console.log(person.ABC());



// var person1 = {
//     name: "Dhruvi",
//     today: new Date()
//   };

//   let MyString = JSON.stringify(person1);
//   console.log(MyString);

// const Person = {
//     name: "John",
//     age: 30,
//     Children : [
//       {name:"kat", hobbies:["Dance","swimming"]},
//       {name:"rony", hobbies:["cooking","reading"]},
//       {name:"sam",hobbies:["travelling","singing"]}
//     ]
//   }

// let text="";
//   for(let i in Person.Children){
//     text += Person.name + "'s Children name : " + Person.Children[i].name +"\n";
//     for(let j in Person.Children[i].hobbies){
//         text += "Hobbbies of "+Person.Children[i].name +" is "+ Person.Children[i].hobbies[j] +"\n";
//     }     
//   }

//   console.log(text);


  const letters =  new Set (["a","b","c"]);

  const iterator = letters.keys();

  let txt = "";
  for (const entry of iterator){
    txt += entry + "\n";
  }

  console.log(txt);