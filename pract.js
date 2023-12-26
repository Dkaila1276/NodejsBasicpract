// // Taking input as an array A having some elements.
// let A = [1, 2, 3, 4, 5];

// // Mapping with map method.
// b = A.map(x => x * 3);
// console.log(b);

// // Mapping and flatting with flatMap() method.
// c = A.flatMap(x => [x * 3]);
// console.log(c);

// // Mapping and flatting with flatMap() method.
// d = A.flatMap(x => [[x * 3]]);
// console.log(d);


// let a = [1,20,12,70,60,8]
// let b1 = a.sort(function(a,b){return a-b});
// console.log(b1);


// const arr = [1,2,[3,4]]
// const b = arr.flatMap((num) => {
//     console.log(num*2)
// })


// const arr1 = [1,2,[3,4,5],[6,7,8]];
// console.log(arr1.flat());
// console.log(arr1.flatMap((n) => n*2));

const arr = ["a","b","c","d",["e","K"]]
const arr1 = [2,3,4,5,6]

const newArr = arr.flatMap((arr,index) => [arr,arr1[index]] );
console.log(newArr);