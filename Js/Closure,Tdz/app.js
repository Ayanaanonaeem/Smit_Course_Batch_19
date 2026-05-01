// *******************  closure ******************************
//  inner fnction apne outer fnction ke variable ko yd rakhta hai  even after parent fnction ke khtm hone ke bd bhi

function outer() {
    var count=0

    return function inner(){
        count++
        console.log(count);
        
    }
}

var fn=outer()
fn()//1
fn()//2


// *******************  Temporary dead zone ******************************
// jab varaible decarle hojata hai lkn use nhi krsakte before initialization

console.log(a);


var a=3

