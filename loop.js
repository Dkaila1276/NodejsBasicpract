// let age = 17;

// //If ..Else
// if ( age > 18)
// {
//     console.log("Adult");
// }
// else
// {
//     console.log("Too Young");
// }

// let age1 = 15;
// //Else if
// if( age1 > 65)
// {
//     console.log("too Old")
// }
// else if( age1 < 18)
// {
//     console.log("Too young");
// }
// else
// {
//     console.log("Adult");
// }

// //Switch

// let age2 = 30;
// let result;

// switch (age2){
//     case 20 : 
//         result = "Age is 20.";
//         break;

//     case 30 : 
//         result = "Age is 30";
//         break;

//     default : 
//         result = "Not found";
//         break;
// }

// console.log(result);

// //For
// const num = [20,30,40,50,60]
// for(let i = 0 ; i < num.length ; i++){
//     console.log(num[i]);
// }

// //For in
// const num1 = [3,5,6,7,8,2]
// let txt = "";
// for(let i in num1){
//     txt += num1[i] +"\n"
// }
// console.log(txt);

// //For of
// const num2 = [30,50,100,20,10]
// let txt1 = "";
// for(let x of num2){
//     txt1 += x +"\n"
// }
// console.log(txt1);


// //while
// const num3 = [7,4,9,10,2,100]

// let i = 0 ;
// while(i < num3.length){
//     console.log(num3[i]);
//     i++;
// }

// console.log("\n");

// //Do while

// const num4 = [6,10,30,48,59,40]
// let x = 0;
// do{
//     console.log(num4[x]);
//     x++;
// }while(x < num4.length)


// //label

// const num5 = [20,50,409,309]
// let txt2 = "";
// list: {
//     txt2 += `${num5[0]} \n`;
//     txt2 += `${num5[1]} \n`;
//     break list;
//     txt2 += `${num5[2]} \n`;
//     txt2 += `${num5[3]} \n`;
//   }
//   console.log(txt2);


// const a = 0.1;
// const b = 0.6;
// console.log(a+b);

// //   console.log(0.5 + 0.1 === 0.6 );

// console.log(0.2 + 0.1 == 0.3);
// //   console.log(0.4 + 0.1 === 0.5);
// //   console.log(0.3 + 0.1 === 0.4);


// //For in loop

// var b1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let i in b1)
// {
//     console.log(" row " + i);
//         for(let j in b1[i])
//         {
//             console.log(" " + b1[i][j]);
//         }
// }

// //foreach

// const array = [20,40,30,70,10]

// for(let i = 0 ; i < array.length ; i++)
// {
//         console.log(array[i]);
// }


// array.forEach((element,index) => {
//     console.log("Index : " + index + " Element : " + element);
// });


var arr = [12, 5, 2, 35, 18, 32, 1, 5, 2];
var sum = 0;
var i = 0;
while (sum <= 100) {
  sum += arr[i];
  i++;
}
console.log(i, sum);