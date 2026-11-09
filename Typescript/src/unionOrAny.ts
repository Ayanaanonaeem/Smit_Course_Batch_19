// UNION

let subscriber:number | string=100000

console.log(subscriber);

let apiStatusResponse:"pending"|"error"|"success"="error"


apiStatusResponse="success"

// This is called union we can give our own type also 



// Any

const orders=["20","23","28","30"]

let countOrder:number|string|undefined;

for (const order of orders) {
   if(order=="28"){
    countOrder=order
    break;
   }
    
}

console.log(countOrder);    



