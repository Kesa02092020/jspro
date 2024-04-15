// Predefine Methods
const orginstring = "kesapragatha daughter of ramachandran";

console.log(orginstring.split('').reverse().join(''));

//Reverse FOR Method

const reversestr = (orginstring) => {
    let str = "";
    for(let i = orginstring.length - 1;i>=0;i--){
        str += orginstring[i];
    }
    return str;
}
console.log(reversestr(orginstring));

//foEach Method 

const duplicateForeach=(orginstring)=>{
    let rstr = [];

    orginstring.split('').forEach((element) => {
        if(rstr.indexOf(element) === -1)
        {
            rstr.push(element);
        }
    });
    Object.entries(rstr).map(([key,val])=>`${key}${val}`);
    return Object.assign({},rstr);
}
console.log(duplicateForeach(orginstring));


const repeatedForeach=(orginstring)=>{
    let rstr = {};

    orginstring.split('').forEach((element) => {
        if(rstr[element])
        {
            rstr[element]++;
        }
        else{
            rstr[element] = 1; 
        }
    });
    //Object.entries(rstr).map(([key,val])=>`${key}${val}`);
    return Object.entries(rstr).map(([key,value]) => `${key}${value}`).join('');
}
console.log(repeatedForeach(orginstring));

