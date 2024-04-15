

const arrr1 = [{"a":2},{"b":-2},{"c":5},{"d":7},{"e":3}]
const ar2 = [{"a":2},{"d":7},{"e":3}]
function arrMax(input,input1){
    let obj = {};
    for(let i of input){
        if(input.indexOf(i) === input1.indexOf(i)){
            obj.push(input[i])
        }
    }
    return obj;
}
console.log(arrMax(arrr1,ar2));


function callback(accumlator,current,index,arr){
    console.log(index,arr);
    return accumlator + current;
 
}

let arr1 = [1, 2, 3, 4, 5];
let result = arr1.reduce(callback, 0);
console.log("Result:", result);

function callba1(accum,curr){
    if(accum[curr]){ 
        accum[curr]++;
    }
    else{
        accum[curr] = 1;
    }
    return accum;
 }

 let arr2 = [12,45,62,32,5,8,35,4,8,3,96,5];
 let result2 = arr2.reduce(callba1,{});
 
 let res = Object.keys(result2).map(item => item)
 console.log("DSA:", res.join());
 

 