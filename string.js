let str = "Apple, Banana, Kiwi";
let part = str.substring(-7);
console.log(part);
let part1 = str.slice(-7);
console.log(part1);


let a = "DHRUVI PATEL";
let part2 = a.slice(-4);
let part3 = a.substring(-7,4);
console.log(part2 + " , " + part3); // atel , Dhru
let part4 = a.slice(4,2);
let part5 = a.substr(4,3);
console.log(part4 + " , " + part5);// empty string , ruv


//Replace 


//ReplaceALL
let text = "I love cats. Cats are very easy to love. Cats are very popular."
let text1 = "hello , My name is Dhruvi." 
// text1 = text1.replace("My","my");
// text1 = text1.replace("my","my"); // Case sensitive
text1 = text1.replace(/my/i,"my");//insensitive
let text2 = text1.toUpperCase(); //uppercase
let text3 = text1.toLowerCase(); //lowercase
let text4 = "How are you??"
let text5 = text1.concat(". ",text4); //concate
const match = text.matchAll("Cats");
let myarr2 = Array.from(match);
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");


console.log(text);
console.log(text1);
console.log(text2);
console.log(text3);
console.log(text5);
console.log(myarr2);


//Serach Methods

let txt = "Please locate where 'locate' occurs!";
let index = txt.indexOf("locate");
let index1 = txt.lastIndexOf("locate");
let index2 = txt.indexOf("Dhruvi");
let index3 = txt.indexOf("locate",15);
let index4 = txt.lastIndexOf("locate",9);
let search = txt.search("locate");
let myarr = txt.match("cat");
let myarr1 = txt.match(/cat/g);
console.log(index); //Given first occurrence of a string's index. 7
console.log(index1); // given last occurrence of a string's index. 21
console.log(index2); //Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(index3); // 21
console.log(index4); // 7 Both methods accept a second parameter as the starting position for the search:
console.log(search); // 7 
console.log(myarr.length + " , " + myarr); 
console.log(myarr1.length + " , " + myarr1); 


let x = 5;
let y = 9 ;
let z = x.toString();
let z1 = y.toString();
console.log(z + z1);



const students = ["Ayush" , "Sakshi" , "Dhairya" , "Ved"]
students[3] = "ved";
console.log(students[3]); //sakshi

console.log(students);

let stud = students.length;
let txt1 = "";
for (let i = 0 ; i < stud ;i++)
{
    txt1 += `${students[i]} \n`
}
console.log(txt1);

//Regular Expressions
let a1 = "dhruvi patel";
let b = a1.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, repl => repl.toUpperCase());
console.log(b);


//trim 

let a2 = "   Dhruvi  Patel  ";
console.log(a2.trim());
console.log(a2.replaceAll(" ", ""));
console.log(a2.split("i"));

"use strict";
let a3 = 10;
console.log(a3);