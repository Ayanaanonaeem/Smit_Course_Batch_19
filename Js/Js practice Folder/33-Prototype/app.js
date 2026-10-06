// function array and string 

// js ke behaviour aesa hai ke agr usko kuch chezen nahi miltin aur unhe woh mazeed search krta hai 
// js main hr chez ek object hoti hai function function bhi hai aur object bhi hai 

function multiply(num){

    return num*5

}
multiply.power=2
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);

// ismain hum multiply.power laga kr bhi access krsakte hain yani ke object ki trah

function createUser(username,price){
    this.username=username
    this.price=price
}
createUser.prototype.increment=function() {
    this.price++
}
createUser.prototype.printUsername=function(){
    console.log(`this is my${this.username}`);
    
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

tea.printUsername()
