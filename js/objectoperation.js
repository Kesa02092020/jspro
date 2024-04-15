


const input = {"a":2,"b":-2,"c":5,"d":7,"e":3}
const input1 = {"a":2,"d":7,"e":3}
function maof(input,input1){
    let obj ={};
    for(let i in input){
        if(input[i] === input1[i]){
            obj[i] = input[i]
        }
    }
    return obj;
}
console.log(maof(input,input1));

const arr1 = [{"a": 2}, {"b": -2}, {"c": 5}, {"d": 7}, {"e": 3}];
const arr2 = [{"a": 2}, {"d": 7}, {"e": 3}];

// Method 1: Using filter and some
function arrMax1(input1, input2) {
    return input1.filter(obj1 => input2.some(obj2 => JSON.stringify(obj1) === JSON.stringify(obj2)));
}

console.log(arrMax1(arr1, arr2));

// Method 2: Using Set and filter
function arrMax2(input1, input2) {
    const set = new Set(input2.map(obj => JSON.stringify(obj)));
    return input1.filter(obj => set.has(JSON.stringify(obj)));
}

console.log(arrMax2(arr1, arr2));

