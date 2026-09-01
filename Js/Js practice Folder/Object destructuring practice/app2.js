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