var myfunct=async () => {
    let raw=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await raw.json()
    hello(data)

}


function hello(data) {
    // console.log(data);
    var myarray=data.map((ele)=>{
        var para=document.createElement("p")
       var text=para.innerHTML=ele.id+" "+ele.title
       document.body.appendChild(para)
    })
}

myfunct()


/////////////////////  fetch using then ///////////////////////////////////////////////////////////
var mydata;
var p=fetch("https://jsonplaceholder.typicode.com/posts")
console.log(p);

p.then((response)=>response.json())
.then((data)=>{
   mydata=data
   return mydata
   hello(mydata)
})
// console.log(data);

function hello(mydata) {
    console.log(mydata);
    
}

async function fetchFunc(){
    var raw=await fetch("https://jsonplaceholder.typicode.com/posts")
    var data=await raw.json()
    newOne(data)
}

function newOne(data) {
    console.log(data,"=====> line 46");
    
}

fetchFunc()

function bye(){
    console.log("Hell and good bye");
    
}

function sum(){
    console.log("Ayan")
}
function sum(){
    console.log("Ayan")
}
function sum(){
    console.log("Ayan")
}