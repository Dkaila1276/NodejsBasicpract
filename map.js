// const student_info = new Map ([
//     ["Dhruvi",23],
//     ["vidhi",24],
//     ["xbdh",67],
//     ["Honey",25]
// ]);


// student_info.set("Labdhi",23);


// console.log(student_info.get("vidhi"));
// console.log(student_info.size);
// student_info.delete("xbdh");
// console.log(student_info.size);


// let text = "";
// student_info.forEach(function(age,name){
//     text += name + " is " + age + " years old \n"; 
// })

// console.log(text);


// let text1 = "";

// for(const x of student_info.entries()){
//     text1 += x +"\n";
// }

// console.log(text1);


// console.log(student_info.has("xbdh"));
// console.log(student_info.has("Dhruvi"));
// console.log(student_info.has("Labdhi"));

//String_Methods
const a = "     hi, I'm Dhruvi Patel.dhruvi.dhruvi.dhruvi      ";
console.log(a.length);
console.log(a.match("hru"));
const y = a.matchAll("hru");
console.log(Array.from(y));
console.log(a.trim().length);
console.log(a.replaceAll(" ", ""));
console.log(a.search(/HI/i));
console.log(a.search(/i'/i));
console.log(a.search(/d/i));
console.log(a.search(/p/i));
console.log(a.lastIndexOf(" "));
console.log(a.indexOf(" "));

//SET
const alpha = new Set(['A','B','C','D','E']);
alpha.add('F');
console.log(alpha); 

console.log(alpha.keys());
let text = "";
alpha.forEach(function(value){
    text += value + "\n";
})
console.log(text);

console.log(typeof(alpha));

console.log(alpha instanceof Set);