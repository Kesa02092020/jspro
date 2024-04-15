
// https://flexiple.com/javascript/find-duplicates-javascript-array/
//https://stackoverflow.com/questions/30512744/count-repeated-letters-in-a-string
//https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/

//map vs Foreach

const arr = [23,34,54,3,6,2,90];

const maparr = arr.map(item =>{
  return item / 2;
})

const forearr = arr.forEach((item,i) =>{
  arr[i] = item * 2
})

console.log(maparr);

console.log(arr);

//null vs undefined

console.log(typeof null)
console.log(typeof undefined)


//event delegation

// document.querySelector("#namef").addEventListener("click",(e)=>{

//   if(e.target.tagName === 'LI'){
//     window.location.href += "#"+ e.target.id
//   }
// })

// setTimeout Out And let vs var

function comittime(){
  for(let i = 0; i < 3 ; i++){
    setTimeout(function log(){
      console.log(i)
    },i * 1000)
  }
}
comittime();



//Find max number

const arrv = [20,50,23,54,18]

function findmaxval(arrv){
  let max = 0;
  for(let i=0;i<arrv.length;i++){
    if(arrv[i] > max){
      max = arrv[i];
    }
  }
  return max
}
console.log(findmaxval(arrv));

//repeated char

const arrstr = "ramachandran"

function findrepeatstr(arrstr){
  let str = arrstr.split('')
  let storstr = {}
  let max ='';
  for(let i=0;i<str.length;i++){
    max = str[i];
    //console.log(c);
    if(storstr[max]){
      storstr[max] += 1;
    }
    else{
      storstr[max] = 1;
    }
  }
  return Object.entries(storstr).map(([key,value])=> `${key}${value}`).join('');
}
console.log(findrepeatstr(arrstr));




function findrepeatstrw(arrstr){
  let str = arrstr.split('');
  const charCount = str.reduce((acc, char) => {
    if (acc[char]) {
      acc[char]++;
    } else {
      acc[char] = 1;
    }
    return acc;
  }, {});
 return charCount;
}
console.log(findrepeatstrw(arrstr));

//fibonics
function fibno(fib){  

  for(let i=2;i<10;i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib;
}
const fib = [0,1]
console.log(fibno(fib));

//repeat arrr
function maxdupli(arr1,arr2){  

  let farr = new Set(arr1)
 const sarr = arr2.filter((ele) =>{
  return farr.has(ele);
 })
 return sarr;
}
console.log(maxdupli([2,56,8,3,45,8,6,],[2,23,3,235,8,6,]));



console.log("hai");
setTimeout(function(){
  console.log("time");
},2000)
console.log("hi");
console.log("hai1");
console.log("hai2");
console.log("hai3");


console.log([2,56,8,3,45,8,6,[34445,[767,67,[342,23]],[2,23,3,235,8,6,]]].flat(3));

//reverse 

function reverstr(str){
  let revstr =" ";
  for(let i = str.length - 1; i>0; i--){
    revstr += str[i];
  } 
  return revstr;
}
console.log("reverse  = "+reverstr("madamdfsdf"));



///longest word 
 
function longestword(str){
  let strl = str.split(' ');
    let longestword = "";
  for(let word of strl){
   if(word.length > longestword.length){
      longestword = word;
   }
  }
  return longestword;
} 
console.log(longestword("ramchandran is learn and study"));



//palindrome
function palindrome(str){
  const st = str.split("").reverse().join(" ");
return st;
}
 console.log(palindrome("madam"));

 console.log(palindrome("wedefsdfs"));



 
 function prime(n){
  for(i=2;i<n/2;i++){
    if(n % i == 0){
      console.log("Not Prime  "+n);
    }
    else{
      console.log("prime   " +n);
    }
  }
 }
 console.log(prime(45));




//remove duplicate 
function duplicate(arre){
  let reve = [...new Set(arre)];
  return reve;
}
console.log("duplicate = "+duplicate([2,56,8,3,45,8,6,]));



//anagrams

function anagrams(str1,str2){
  const s1 = str1.split('').sort().join("");
  const s2 = str2.split('').sort().join(""); 
 return s1 ===s2;
}

console.log(anagrams("lights","slight"));



//number of vowels 

function vowels(str){
  const vowels =['a','e','i','o','u']
  let count = 0;;
  for(let vows of str.toLowerCase()){
    if(vowels.includes(vows)){
      count++
    }
    
  }
  return count;
}

console.log(vowels("Ramchandran is learn and study"));



 //pagnation 


 const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

 const itempage = 10;

 const perpage = 1;

 const startIndex = (perpage - 1) * itempage;

 const pagedata = data.slice(startIndex, startIndex + itempage);

console.log(pagedata);
  
 //large number 
 
 const data1 = [7,25,8,9,10,11,12,13,14,15,16];

 function maXNo(data1){
  let max = 1;
  for(let i=1;i >= data1.length; i++){
    if(data1[i] > max){
      max = data1[i];
    }
  }
  return max;
 }
 console.log("Max No",maXNo(data1));
 
 
 //number is prime 

function primeNo(data1){
  let count = 0;
  let prime = 0;
  for(let i = 1;i <= data1.length; i++){
    if(data1[i] / 2 === 0 && data1[i] % i === 0){
      prime = data1[i]
      count++;
    }
  }
  return `${count}${prime}`;
}
console.log("Prime",primeNo(data1));

 //factorial of a number

function fact(n){
  if(n == 1){
    return 1;
  }else{
    return n * fact(n-1);
  }
  
}
console.log( fact(5))
//whitespace characters 


//sum of all elements

//average

// sort an array

//sorted 

//single sorted array

//remove a specific element 


//second largest element

//reverse the order of words