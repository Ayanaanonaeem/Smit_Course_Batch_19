// so is example se hamne dekh liya ke promise ki priority high hoti hai to set time out ya set intercval se pehle promise chalta hai 
console.log("1")
const p=new Promise((resolve, reject) => {
    if(true){
        resolve("your promise resolve")
    }
})
p.then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
setTimeout(() => {
    console.log("3");
    
}, 1000);
console.log(2);

