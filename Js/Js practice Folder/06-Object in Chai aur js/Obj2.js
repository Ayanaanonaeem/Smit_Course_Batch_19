// Object part 2

const myObj=new Object()

console.log(myObj);

// Ye ek singleton Obj hai

let Obj2={}

Obj2.id="1"
Obj2.name="Ayan"
Obj2.email="Ayan@gmail.com"
// console.log(Obj2);


let mainObj={
    email:"fraz@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Ayan",
            lastName:"Naeem"
        }
    }
}

// console.log(mainObj.fullName.userFullname.firstName);

const ObjSub={
   name:"Ayan"
}
const ObjSub2={
    fname:"jawaid"
}

const ObjSub3=Object.assign(ObjSub,ObjSub2) //For combining multiple Objects
console.log(ObjSub3);


const ObjSub4={...ObjSub,...ObjSub2}
console.log(ObjSub4,"54");

// for accessing object keys 

// console.log(Object.keys(ObjSub4));

// for accessing object values 
console.log(Object.values(ObjSub4));

// for accessing object both keys and values 
console.log(Object.entries(ObjSub4));

