
// https://flexiple.com/javascript/find-duplicates-javascript-array/
//https://stackoverflow.com/questions/30512744/count-repeated-letters-in-a-string
//https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/

//1
function repeatedchar(str) {
  let orstr = str.split(' ');
  let storestr = [];
  let count = 0;
  for (let i = 0; i <= orstr.length; i++) {
    if (orstr[i] === orstr[i + 1]) {
      storestr += orstr[i]
      console.log(storestr);

    }

  }
  return storestr;
}
console.log(repeatedchar("nathiya"));


console.log(repeatedchar('werwfvesrewrfddf'));
//2  
function charCount(str) {
  let arr = str.split('');
  let st = arr.reduce((a, p) => {
    a[p] = a[p] ? (a[p] + 1) : 1;
    console.log(a, p)
    return a;
  }, {});
  return Object.entries(st)
    .map(([key, value]) => `${key}${value}`)
    .join('');;
};
charCount("nathiya");


//console.log(charCount('werwfvesrewrfddf'));
//3  
const countRepeatChar = (str) => {
  let obj = {};

  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] += obj[str[i]];
      } else {
        obj[str[i]] = 1;
      }
    }
    console.log(obj);
  }
};
countRepeatChar("aabcddeee");
//4
const firstlettercaps = (str) => {
  let obj = str.split(' ');
  const ob = obj.map((o, i) => o[0].toUpperCase() + o.slice(1));
  return ob.join(' ');
}

console.log(firstlettercaps("social media platform headquartered in san"));
//5  
const arrsum = (arr) => {
  const ob = arr.reduce((o, i) => o + i, 0);
  return ob;
}

console.log(arrsum([20, 50, 60, 10, 5]));

//6
const red = document.getElementById("redid");
const yellow = document.getElementById("yellowid");
const blue = document.getElementById("blueid");

red.addEventListener("click", () => changes("Red"));
yellow.addEventListener("click", () => changes("Yellow"));
blue.addEventListener("click", () => changes("Blue"));

function changes(color) {
  document.body.style.backgroundColor = color;
}
//7 
// let namestr = "ramachandran";
// let strar = namestr.split("").join();
// console.log("split"+strar);
// const filetter = strar.filter((leter,i) =>{
//   return leter[i] === leter[i]+1;
// })
// console.log(filetter);
let namestr = "ramachandran";
let strar = namestr.split("");
console.log("split" + strar);
const filetter = strar.filter((leter, i) => {
  return leter[i] === leter[i] + 1;
});
console.log(filetter);


let namestrs = "ramachandran";
let srt = []
let strars = namestr.split("");
console.log("split: " + strars);
const filetters = strar.filter((letter, i) => {
  if (letter[i] !== strar[i + 1]) {
    return letter, i;
  }
  else {
    return letter, i;
  }

});
const st = srt.push(filetters)
console.log("djfsdfsd"+st);

let names = "ramachandran";
const myArray = names.split('');
console.log(myArray);
const elementCounts = {};

myArray.map(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
  console.log((elementCounts[element] || 0));
  // console.log("v2" +elementCounts[element]);
});

console.log(elementCounts);


console.log("9");
function repeatLetter(str) {
  let strs = str.split('');
  let letters = [];
  let count = 1;
  for (let i = 0; i < strs.length; i++) {
    let stf = strs[i];
    let stl = strs[i + 1];
    console.log(stf + " - HI - " + stl);
    if (stf == stl) {
      count++;
    } else {
      let value = `${count}${strs[i]}`
      letters = [...letters, value];
      count = 1
    }
    console.log(letters);
  }
  console.log(letters);
}
repeatLetter("rama");

function repeatLetters(str) {
  let st = str.split('');
  let letter = [];
  let num = '';
  for (let i = 0; i < st.length; i++) {
    num = st[i];
    //letters[num] = letters[num] ? letters[num] + 1 : 1;
    console.log(letter[num]);
    if (letter[num]) {
      letter[num] += 1;
    } else {
      letter[num] = 1;
    }
  }
  console.log(letter);
  console.log(letter.toString());
  let fletter = Object.entries(letter).map(([value, key]) => `${key}${value}`).join('');

  console.log(fletter);
}

repeatLetters("rama");




function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
}
let arrs = [5, 8, 45, 68];

console.log(sum(arrs))

function prime(n) {
  let prime = true;
  let i = 2;

  for (i; i <= n/2;i++){
    if (n % i == 0) {
      prime = false;
    break;
    }
  i++;
  }
 if(prime){
    console.log('Not Prime',n)
 }else{
  console.log('Is Prime',n)
 }
}
let n = prime(100);

function reverse(str) {
  let strs = str.split('');
  let finalstr = '';
  for (let i = strs.length-1; i >= 0; --i) {
     finalstr += strs[i];
  }
  console.log('Reverse String = ',finalstr);
}

let string = 'Ramachandran';
reverse(string);

factoral = (n) => {
  if(n==1){
    return 1;
  }else{
    return n*factoral(n-1);
  }
  
}
let fact = factoral(10)
console.log(fact);


function triangle(n) {
	let trin=0;
	for(let i=1;i<=n;i++){
	 trin = trin + i;		
	}
	console.log("Triangle",trin);
}
triangle(6)