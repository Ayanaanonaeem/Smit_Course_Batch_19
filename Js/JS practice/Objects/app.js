// Object practice 

var obj={
    name:"Ayan",
    lastName:"Naeem",
    age:20,
}

var obj2={
    name:"jawaid",
    lastName:"iqbal",
    
}

var obj3=obj
obj3.salary="40"


var obj4={
    name:"Ayan",
    studies:"Sir syed university of engineering and technology",
    age:20,
}

console.log(obj4.name);
console.log(obj4.studies);
console.log(obj4.age);

obj4.age="30"
console.log(obj4);

// we can also create a fnction in our object 

var myobj={
    name:"Ayan",
    moew:function() {
        return this.name
        
    }
}
console.log(myobj.moew());




