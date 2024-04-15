console.log("Hi Js")

console.log(`length => 0
            [[Prototype]] =>  Array(0)
            at => ƒ at()
            concat => ƒ concat()
            constructor => ƒ Array()
            copyWithin => ƒ copyWithin()
            entries  =>   ƒ entries()
            every  =>   ƒ every() 
            fill  =>  ƒ fill()
            filter => ƒ filter()
            find => ƒ find()
            findIndex => ƒ findIndex()
            findLast =>  ƒ findLast()
            findLastIndex =>  ƒ findLastIndex()
            flat =>  ƒ flat()
            flatMap =>  ƒ flatMap()
            forEach =>  ƒ forEach()
            includes => ƒ includes()
            indexOf =>  ƒ indexOf()
            join => ƒ join()
            keys =>  ƒ keys()
            lastIndexOf => ƒ lastIndexOf()
            length =>  0
            map => ƒ map()
            pop => ƒ pop()
            push =>  ƒ push()
            reduce =>  ƒ reduce()
            reduceRight =>  ƒ reduceRight()
            reverse => ƒ reverse()
            shift =>  ƒ shift()
            slice => ƒ slice()
            some => ƒ some()
            sort => ƒ sort()
            splice =>  ƒ splice()
            toLocaleString =>  ƒ toLocaleString()
            toReversed =>  ƒ toReversed()
            toSorted =>  ƒ toSorted()
            toSpliced => ƒ toSpliced()
            toString => ƒ toString()
            unshift =>  ƒ unshift()
            values => ƒ values()
            with => ƒ with()
            Symbol(Symbol.iterator) =>  ƒ values()
            Symbol(Symbol.unscopables) =>  {at =>  true, copyWithin =>  true, entries =>  true, fill =>  true, find =>  true, …}
`);

const products = [1,2,5,3,8,4,6,8,5,7,9];
console.log( 2 === -1 );

//console.log(products.filter((item,index) => products.indexOf(item) !== index));

function repeated(products){
    //let splitpro = products.split('');
    //console.log(products);
    let getstr = [];
    products.forEach(element => {
        //console.log(element);
        if (getstr.indexOf(element) === -1) {

            console.log(element);
           // getstr = [...getstr,element]
            //getstr.push(element);
            //return false;
        }
        getstr = [...getstr,element]
    });
    //console.log(getstr);
}
repeated(products);

function myfun(s1,s2){
    console.log(this,s1 + s2);
}
let obj = {
    name:"Ram"
}

// Bind
//const myfunction = myfun.bind(obj); 
//myfunction();

//Call
//myfun.call(obj);



//Apply
myfun.apply(obj,['Ram','Chandran']);

const newele = document.createElement("div");
newele.textContent = "Ramachandran"; 
document.body.appendChild(newele); 
console.log(newele.innerHTML);

const cloneEle = document.getElementById("header");
const checkclone = cloneEle.cloneNode(true);

checkclone.textContent = "check the element have or Not";

document.body.appendChild(checkclone);

document.write("Ramachandran");


   
