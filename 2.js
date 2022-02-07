let car = {
    color: "black",
}
    car.color = "green"

showPower();
function showPower(){
    let power = "200";
    console.log(power);
}
    console.log(car.color)
// -- task from 1 - 3


  function sum(pear,apple){
      return pear + apple;
  }
  let result = sum(4,6);
  console.log(result);
  //-- task 4

let name = prompt("Who are you");
checkName();
function checkName (){
    if (name === "Tanya"){
        alert("Hello Tanya");
    } else {
        alert("I dont know you");
    }
}
--//task5

detectType(9);
detectType(null);
detectType(true);

function detectType(x) {
    console.log(typeof(x))
}
//-- task 6

function isPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return num > 1;
}
console.log("7", isPrime(7));
console.log("5", isPrime(5));
console.log("37", isPrime(37));
console.log("8", isPrime(8));
console.log("12", isPrime(12));
//-- task 7