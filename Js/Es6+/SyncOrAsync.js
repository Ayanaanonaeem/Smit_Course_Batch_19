//***************** Synchornus ********************************
// Jo kam ek ke bd ho jb tk pehla kam khtm na hojaye dosra kam na ho means line by line chlna ek task end kro uske bad dosre task pr aao 





//***************** Asynchornus ********************************
//sare km ek sth shuruh kro aur jiska ans pehle ajaye uska jawab dena


// Javascript single threaded language a mtlb ke ek km ko ek waqt pr krti hai 



// js main do stack hote hain ek main aur ek side stack apka jo synchronus code hota hai woh main stack main jata hai aur async code jo hai woh side stack main jata hai pehle mainstack ka code execute hota hai
// aur jb main stack khali hota hai side stack ka code check krta hai ke iski bari agayi ya nhi agr async code ki bari ajaye to usko main stack main daldeta hai ye km hota hai eventloop ka z

var a=5
console.log("hello");


const p= new Promise((res,rej)=>{
   if (a<5) {
    return res()
   }else{
    return rej()
   }
})

p.then(()=>{
    console.log("resolve chalgya");
    
}).catch(()=>{
    console.log("reject hogaya");
    
})

console.log("hello");

setTimeout(() => {
    console.log("set time out");
    
}, 2000);
console.log("hello");

setTimeout(() => {
    console.log("set time out 1sec");
    
},0);

console.log("hello");



async function data() {
    let raw=await fetch("https://jsonplaceholder.typicode.com/posts")
    let ans= await raw.json()

    Myfunction(ans)
    

    
    
     
   
    
}



function Myfunction(data) {
    
    console.log(data[1]);
    
    
}

data()


function abc (){
     console.log("hello")
}
function abc (){
     console.log("hello")
}
function abc (){
     console.log("hello")
}
function abc (){
     console.log("hello")
}
function abc (){
     console.log("hello")
}
function abc (){
     console.log("hello")
}