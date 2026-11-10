const obj={
    name:"Ayan",
    email:"ayan@gmail.com",
    salary:"100k"
}

const {email:em}=obj
// console.log(em);


function hello({name:na,email,salary}){
 console.log(na);
 console.log(email);
 console.log(salary);
 
}

hello(
    {name:"Ayan",
    email:"ayan@gmail.com",
    salary:"100k"
    }
)

const user1={
    name:"Ayan",
    fatherName:"Naeem",
    age:21,    
}
const user2={
    name:"jawaid",
    fatherName:"sagherr",
    inner:["reactjs","js"],
    age:55,    
}


const user3={
    ...user2
}

user3.name="Ali"
user3.inner.push("next")
console.log(user2);


// object jb bhi hum banate hain to woh heap main store hota hai aur object ke undar value alag jgh store hoti hai aur jo nested obj hai uski key to wahin rehti hai but vallues ka reference store hota hai to jb bhi hum spread krte hain dosre object main to uski simple value main koi change kroge to pehle wale object main koi far nhi ayega woh alag rahega jbke nested object main kuch change krte hain to uper bhi farq dikhega kynke uska refernce dosre obj ke pass chala gya hai 