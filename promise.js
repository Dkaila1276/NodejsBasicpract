// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//         let y = await myPromise;
//         console.log(y);
//   }
  
//   myDisplay();


//   function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


async function f() {
  console.log('Async function.');
  return Promise.resolve(1);
}

f(); 

function myDisplayer(some){
  console.log(some);
}

let myPromise = new Promise(function(resolve,reject){
  let x = "";

  if(x == "")
  {
    resolve("with Promise");
  }
  else{
    reject("async ");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
)