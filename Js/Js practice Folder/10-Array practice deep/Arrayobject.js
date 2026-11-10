let arr=[
    {
        id:1,
        name:"Ayan"

},
{
    id:2,
    name:"Faraz"
}
]

const myarr=arr.map((val)=>{
   if (val.id!==2) {
    console.log(val);
    
   }
})

// var arr2=[1,2,3,4,5,6,7,8]
// var copyArr=[...arr2,9]

// console.log(copyArr);

// console.log(myarr);

var copyObj=arr.map((val)=>{
    const myobj={...val,id:3}

    return myobj
    
})
console.log(copyObj);

console.log("hello")
