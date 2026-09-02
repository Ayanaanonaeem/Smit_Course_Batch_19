// {
//     const a=30;
//     let b=20;
//     var c =50
// }

// console.log(a);
// console.log(b);
// console.log(c); //50 c yhn chal jayega kynke global scope hai var


// local scope main variable change hojata hai but agr local scope main variable 
// bnaya ho to woh niche access nahi hosakta

let a=5

if(true){
    let a=7
}
console.log(a);//5



// 888888888888888888888888888 closure 888888888888888888888888

// Inner function apne parent variable ko yd rakhsakta hai 
// parent function apne inner variable ko yd nahi rakhsakta 
// Example bache bare se icecream chen sakte hain lkn bare bachon se chenen to achi bt nahi hogi

let lastname="naeem"
function one() {
    const username="Ayan"
    function two() {
        const fullName=username+lastname
        console.log(fullName);
        
    }
    // console.log(fullname);
    two()
    
}

one()


{
    {
        let d= 4
    }
    
    gian=5
    console.log(gian);
    
    
}