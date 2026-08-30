// Objects in js 

// Singleton
// nhi bnta hai agr literals se define krte hain 

// agr contructor se kren to singleton bnta hai 

let userJs={
    name:"Ayan",
    email:"ayan@gmail.com",
    age:10,
    isLoggedin:false

}

// for accessing object there are two way 

console.log(userJs.name);
console.log(userJs["name"]);

// interview question

// symbol ko aese likhte hain object main
// aur agr normal likhen gen to normal string lega 

let mySym=Symbol("key1")

let userJs2={
    name:"Ayan",
    email:"ayan@gmail.com",
    [mySym]:"key1",
    age:10,
    isLoggedin:false

}
// console.log(userJs2);



userJs2.email="chatgpt@gmai.com"
// Object.freeze(userJs2)//object ko freeze krsakte hain aese 
console.log(userJs2);


// userJs2.greeting=function(){
//     console.log("hi js welcome to our course");
    
// }



// for accessing values of object we use this this refer to the same object we are using this in it 

userJs2.greeting=function(){
  console.log(`hi this is ${this.name}`);
  
}

console.log(userJs2.greeting());
