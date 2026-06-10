const input=document.getElementById("input") 
const button=document.getElementById("btn")
const box=document.getElementById("box")
const sub=document.getElementById("sub")
var ele;
var i=0
// button.addEventListener("click",()=>{
//     ele=`<p><span>${++i}) ${input.value}</span><button id="edit" onclick="edittodo(this)">EDIT</button><button id="del" onclick="Deltodo(this)">Delete</button><p>` 
//    sub.innerHTML+=ele
// })

button.addEventListener("click", addTodo);
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    let ele = `<p><span>${++i}) ${input.value}</span>
    <button id="edit" onclick="edittodo(this)">EDIT</button>
    <button id="del" onclick="Deltodo(this)">Delete</button></p>`;

    sub.innerHTML += ele;

    input.value = ""; // optional (input clear)
}

function edittodo(ele) {

   console.log(ele.previousElementSibling.innerText);   
   var newtodo=prompt("enter a new value", ele.previousElementSibling.innerText)
   ele.previousElementSibling.innerText=newtodo
    
    
}

function Deltodo(ele) {
   ele.parentElement.remove()
   
 
}