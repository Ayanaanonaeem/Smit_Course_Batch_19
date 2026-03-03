var para=document.getElementById("para")

function expandpara() {

    para.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam optio vel modi quidem saepe, placeat ex quo assumenda exercitationem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem neque fugiat, totam adipisci voluptate ea in magnam corrupti modi nulla, quam et sunt impedit?"
}

function showsomelist() {
    var list="<ol><li>First list</li><li>second list</li><li>third list</li></ol>"
    document.getElementById("lorislist").innerHTML=list
}

// ========================chapter 51======================

var image=document.getElementById("image")

function hideimage() {
    image.className="hide"
}

// We can add one or more classes using plus equal to

// ========================chapter 53======================
function swapimage() {
    image.src="./download.png"
}

function showOldimage(params) {
    image.src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="
}

// this is how you can use classes and .src to swap images 