function intersection(arr1,arr2){

    // const arr = new Set(arr1);
    // const filterda = arr2.filter((element) => {
    //     return arr.has(element)
    // })
    
    const arr = [...new Set(arr1)];
    const fliterval = arr2.filter((item,index) =>{
        return arr2.includes(item);
    })

 return fliterval;
}
console.log("Inter",intersection([2,3,4,8,5],[2,7,4,8,6]));

function unique(str){

    let unielemet = [];
   let strsplit = str.split('')
    // for(let element of str) {
    //     if(unielemet.indexOf(element) === -1){
    //        unielemet.push(element)
    //     }
    // }

    //return true;
   
    strsplit.forEach((element,index) => {
        if(unielemet.indexOf(element) === -1){
            unielemet.push(element)
            //return false;
        }
        else{
            //unielemet.push(element)
        }
        
    })

    return unielemet;
}


console.log(unique('abcdef'));
console.log(unique('abacdedeefghgg'));


function filterdup(arr){
    // const fitervalue = arr.filter((item,index) => 
    // arr.indexOf(item) !== index);

    // let uniqueval = [];
    // for(let i = 0;i<= arr.length;i++){
    //     if(arr[i] !== i){
    //         uniqueval.push(arr[i])
    //     }
    // }

    // let uniqueval = [];
    // arr.forEach((elemet,index) =>{
    //     if(arr.indexOf(elemet) !== index){
    //         uniqueval.push(arr[index])
    //     }
    // })

    let uniqueval = [];
    for(let duplicate of arr){
        if(uniqueval.indexOf(duplicate) === -1){
           uniqueval.push(duplicate);
        }
    }
    uniqueval.sort((a,b) => a - b)
    let temparr = uniqueval.pop()
    console.log(temparr);
    let number = 0;
    uniqueval.forEach(item => number += item);
    console.log(number);
    console.log(uniqueval);
    return temparr === number;
}
const arrf = [12,45,62,32,5,8,35,4,8,3,45,96];
console.log(filterdup(arrf))


function strins(strprime){

    let temp = strprime.match(/\S\w\D/g);
    return temp;

}

console.log(strins('was -itr- to prime, 23434242polidrome number'))

