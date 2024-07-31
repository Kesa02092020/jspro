// function multiply(...args) {
//   const totalval = args.reduce((total, item) => (total = total + item), 1);
//   return totalval;
// }
// console.log(multiply(1, 5, 8, 4, 6, 3, 4, 5, 7));

// function mydebounce(cb, d) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// }

// const debounce = mydebounce(() => {
//   console.log("Hi Ramachandran");
// }, 10000);
// debounce();

// console.log("====================================");
// console.log("PROMISE");
// console.log("====================================");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randon = Math.floor(Math.random() * 10);
//     console.log(randon);
//     if (randon > 5) {
//       resolve(randon);
//     } else {
//       reject("Not greater than 5");
//     }
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log("Promise :", result);
//   })
//   .catch((error) => {
//     console.log("Promise error: ", error);
//   });

// //ALL

// const allPromise1 = new Promise((resolve) => {
//   setTimeout(resolve, 1000, "Hello");
// });
// const allPromise2 = new Promise((resolve) => {
//   setTimeout(resolve, 200, "Word");
// });
// const allPromise3 = new Promise((resolve) => {
//   setTimeout(resolve, 800, "Text");
// });

// Promise.all([allPromise1, allPromise2, allPromise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //race

// const racePromise1 = new Promise((resolve) => {
//   setTimeout(resolve, 1100, "Hello");
// });
// const racePromise2 = new Promise((resolve) => {
//   setTimeout(resolve, 1000, "Word");
// });
// const racePromise3 = new Promise((resolve) => {
//   setTimeout(resolve, 2000, "Text");
// });

// Promise.race([racePromise1, racePromise2, racePromise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// var working_resource = 4;
// [1, 3, 5, 7, 9]
//   .reduce((seq, n) => {
//     return seq.catch(() => {
//       console.log(n);
//       if (n === working_resource) {
//         return new Promise((resolve, reject) =>
//           setTimeout(() => resolve(n), 1000)
//         );
//       } else {
//         return new Promise((resolve, reject) => setTimeout(reject, 1000));
//       }
//     });
//   }, Promise.reject())
//   .then(
//     (n) => console.log("success at: " + n),
//     () => console.log("total failure")
//   );

// console.log("====================================");
// console.log("ASync/Await");
// console.log("====================================");

// async function asycfunction() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!response.ok) {
//       throw new Error("Requested Failed");
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// const promisedata = async () => {
//   try {
//     const data = await asycfunction();
//     console.log(data);
//   } catch (error) {
//     console.log("No there is No data");
//   }
// };

// promisedata();

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Running");
      resolve();
    }, ms);
  });
}

async function dosomthing() {
  console.log("Start Running");
  delay(1000);
  console.log("Not Block");

  await delay(800);

  console.log("blocked");
}

dosomthing();

let x = 9;
// let y = 8;
// console.log(x ** y);

if (x) {
  console.log("inside");
}
console.log(x);

let obj = {
  name: "Ram",
  age: 35,
};

let arr = [];

if (obj) {
  console.log("true");
}
let staudentName;

if (staudentName) {
  console.log("inside");
}
console.log(staudentName);

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff / 1000 / 60 / 60 / 24 / 365; //convert milliseconds into years
console.log("Date difference in years : " + dateDiffInYears);

const arrayLike = {
  name: "ram",
  age: 10,
};

const realArray = Array.from(arrayLike);

console.log(realArray);
