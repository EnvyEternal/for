/*let a = +prompt("1")
let b = +prompt("2")
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a
    }
   
    return result;

  }
  
  alert(pow(a,b))*/
 
/*function value(a){
    let num = 1000;
    a = num
  while  (num > 50) {
    console.log(num)  
    num = num / 2;
    
  }
  return num;
}

console.log(value())
*/

/*function value(){
  let num = 1000;
  let counter = 0
  
while  (num > 50) {  
  console.log(num)
  num = num / 2;
  counter++
}
console.log("Number of division operations "+counter)
return num;
}
value()*/
function est(){
  let x = +prompt("1")
  console.log(Math.round((x / 10) * 10));
}
  return x;
}
est()