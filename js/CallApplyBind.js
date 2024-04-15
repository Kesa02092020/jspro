
// const foo = ()=>{
//     console.log(this.name);
// }

// foo.call({name:"Ram"})

const foo = function(){
    console.log(this);
}
foo.call();
//foo.call();

const foob = () => {
    console.log("name");
}
const result = foob();


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


//call,apply,bind

var person ={
    name : "Ramachandran",
    hello:function(thing){
      console.log(this.name + " Hello " + thing);
    }
  }
  var daughter ={
    name:"KesaPragatha"
  }
  person.hello.call(daughter,"Nathiya");
  
  person.hello.apply(daughter,["Nathiya"]);
  
  const bindobj = person.hello.bind(daughter);
  
  bindobj("Ram")