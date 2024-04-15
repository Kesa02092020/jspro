mul = (a) => {
    return  (b) =>{
        return  (c) => {
            return (d) => {
            return a+b*c-d;
            }
        }
    }
}
console.log(mul(5)(5)(100)(2)); 


// curry function

function sum(a){
    return function(b){
      return function(c){
        return a + b + c;
      }
    }
  }
  
  console.log("curry 1= " +sum(3)(4)(5));
  
  function evaulate(operation) {
    return function (a) {
      return function (b) {
        return function (c) {
          if (operation === "sum") return a + b + c;
        }
      }
    }
  }
  const mul = evaulate("sum")
  console.log("curry 2= " +mul(3)(14)(5));
  
  
  
  function mul2(a) {
    return function (b) {
        if(b) return mul2(a * b);
          return a;
    }
  }
  console.log("curry 3= " +mul2(3)(14)(3)(4)());
  
  function mul3(a) {
    return function (b,c) {
        return  a * b * c;
    }
  }
  console.log("curry 4= " +mul3(3)(14,2));
  
  function mul56(a) {
    return function (b) {
        if(b) return mul2(a * b);
          return a;
    }
  }
  console.log("curry 3= " +mul56(3)(14)(3)(4)());
  