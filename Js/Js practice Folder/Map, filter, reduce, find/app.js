// MAP new array return krta hai 

const users = [
  { id: 1, name: "Ayan", age: 20 },
  { id: 2, name: "Ali", age: 22 },
  { id: 3, name: "Umer", age: 19 },
  { id: 4, name: "Ahmed", age: 21 }
];

var newAyan=users.map((val)=>{
   return{
    ...val,
    age:val.age+1
   }
})

console.log(newAyan);

// Filter value of filter out krke deta hai ye bhi new array deta hai

var newFilter=users.filter((val)=>{
    if (val.id==2) {
        return val
    }
})

console.log(newFilter);

// Reduce bhi reduce krdeta hai val ko aur ek do value deta hai
// total main koi value nahi hoti shuruh main aur second parameter main pora obj milega 

var newReduce=users.reduce((total,age)=>{
    
    return total+age.age
    
},0)

console.log(newReduce);

// find method is use for finding elements find hum tb use krte hain jb hamen ek specific value dhundni ho aur filter tb use krte hain jb zyada values chaiye

var newFind=users.find((val)=>{
    return val.id==2
    
})
console.log(newFind);


// for each agr hamen specific element pr kam krwana ho to for each use krenge hum just like apko p tag main direct data show krwana hai to ap for each use krenge kyn ye ye kuch return nahi krta

