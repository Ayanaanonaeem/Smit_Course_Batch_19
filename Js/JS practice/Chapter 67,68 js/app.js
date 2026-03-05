// Hum new Elements bhi bnasakte hai html main using js 

var para=document.createElement("p")
var text=document.createTextNode("Hello world")
para.appendChild(text)
document.body.appendChild(para)

// you can add element on a specific place in js 

var div=document.getElementById("div")

div.insertbefore(para,div.childNodes[0])

