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

// console.log(myarr);
