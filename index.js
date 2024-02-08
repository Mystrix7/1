//Functions 📞
function isValidEmail(email){
    return email.includes("@") && email.includes(".com") ? true : false
}
console.log(isValidEmail("anassayman96@gmail.com"));

function addNums(x, y){
    return x + y;
}
console.log(addNums(5, 55));

function isEven(x){
    return x % 2 === 0 ? true : false;
}
console.log(isEven(288));

//Variable scope 🏠

function function1(){
    let x = 2
    console.log(x);
}
function function2(){
    let x = 5
    console.log(x);
}
function2();