let arr=[{id:1,name:"Ayan"}]

// const newArr=[...arr]

// console.log(newArr);

const newArr=arr
newArr.push({id:2,name:"fraz"})

console.log(arr);
console.log(newArr);


const obj1={
    name:"jawaid",
    age:32,
    proffesion:{
        parshon:true,
        name:"faraz"
    }
}   


const obj2={...obj1}

obj2.name="Ali"
obj2.proffesion.name="nawaz"

console.log(obj1.name);
console.log(obj2.name);

console.log(obj1.proffesion);
console.log(obj2.proffesion);


const arr1=[1,2,3,[4,5]]

const arr2=[...arr1]

arr2[3].push(6)

console.log(arr1);
console.log(arr2);

