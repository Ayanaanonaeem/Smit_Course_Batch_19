let arr=[1,2,3,4,5,6,7]

// for each kuch return nahi krta agr ap return keyword lagao to tb bhi
const myArr=arr.forEach((val)=>val+1)
console.log(myArr);

// the best way to do this 
const newArr=[]
const myArr2=arr.forEach((val)=>{
    newArr.push(val+1)
})
console.log(newArr);
