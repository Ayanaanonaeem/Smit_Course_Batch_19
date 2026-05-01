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



// *******************  hoisting and TdZ******************************
//  var ke keyword se bnaya gya variable aur function ke keyword se bnaya gya function hoist hojata hai
// yani ke jb pehle access krsakta hai variable bnane  aur fnction banane se pehle

// example

console.log(b);//ye hoist hota hai aur undefined assign hojata hai 
var b=10

hello()
function hello() {
    console.log("hello world");
    
}

// let and const bhi hoist hote hain yani ke moemory main store hain lkn woh tdz main chalte jate hain jiski wjh se hum usse initialization se pehle access nhi krsakte  

console.log(c);//error ayega
let c=90

console.log(d);// error ayega

const d=5