const arr = [12,45,62,32,5,8,35,4,8,3,5,96];

//Reduce Method
function reducedup(arr){
   let rearr = arr.reduce((accum,curr) =>{
        if(!accum.includes(curr)){ //accum.includes(curr)
            accum.push(curr);
        }
        return accum;
    },[])
    return rearr;
}

console.log(reducedup(arr));


// Reduce ascending order


function reducedupsort(arr){
    let rearr = arr.reduce((accum,curr) =>{
         if(!accum[curr]){ //accum.includes(curr)
             accum[curr] = true;
         }
         return accum;
     },{})
     return rearr;
 }
 const arr1 = [12,45,62,32,5,8,35,4,8,3,96];
 const resarr = Object.keys(reducedupsort(arr1));
 
 console.log(resarr);


 //Filter Method 

 function filterdup(arr){
    const fitervalue = arr.filter((item,index) => arr.indexOf(item) !== index);
    return fitervalue;
}

console.log(filterdup(arr))

// forEach Method

function foreactMethod(arr){

    let storearr = [];

    arr.forEach((element,index) => {
        if(arr.indexOf(element) === index){
            storearr.push(arr[index])//  storearr.push(element)
        }
    })
    return storearr;
}
const arr2 = [12,45,62,32,5,8,35,4,8,3,96];
console.log(foreactMethod(arr2));

// for method

function forMethod(arr3){
    const arr = [];
    for(let i=0;i<=arr3.length;i++){
        if(arr.indexOf(arr3[i]) === -1){
            arr.push(arr3[i])
        }
    }
    return arr;
}
const arr3 = [12,45,62,32,5,8,35,4,8,3,96];
console.log(forMethod(arr3));



