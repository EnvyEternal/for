//#1
/*
let a = Number(prompt("Enter your value"));
let b = Number(prompt("Enter the degree"))
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a
    }
   
    return result;

  }
  
  alert(pow(a,b))
*/

//#2
/*
function value(){
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

//#3
function value(){
  let num = Number(prompt("Enter Value"))
  let ans = (Math.round(num / 11) * 11);
  alert("Your number " + ans);
}

value()