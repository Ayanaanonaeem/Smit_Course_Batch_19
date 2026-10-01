// const promiseOne= new Promise((res,rej)=>{
   
//      res("meow")
  
// })

// promiseOne.then((data)=>{
//     console.log(data);
    
// })

// const promiseTwo=new Promise((res,rej)=>{
//     let error = false
//     if (!error) {
//         res()
//     }else{
//         rej()
//     }
// })
// promiseTwo.then(()=>{
//     console.log("promise resolved");
    
// }).catch(()=>{
//     console.log("promise rejected");
    
// })

const promiseThree=new Promise((res,rej)=>{

    setTimeout(() => {
        
        let num =5
        if(num==5){
            res({username:"Ayan",age:15})
        }else{
            rej("something went wrong")
        }
    }, 1000);
})

promiseThree
.then((data)=>{
    return data.username
    
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
   console.log(err);
   
})
.finally(()=>{
    console.log("your promise is either resolved or rejected ");
    
})

const promiseFive= new Promise((res,rej)=>{
    let num =6
    if(num==5){
        res({username:"js"})
    }else{
        rej("something went wrong")
    }
})

async function myPromise(){
    try {
      const response= await promiseFive
      console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
      
      
}

myPromise()

async function allUsers(){
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data=  await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

allUsers()