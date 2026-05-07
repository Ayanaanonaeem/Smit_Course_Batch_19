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

