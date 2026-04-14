// **************************** MAP METHOD ***********************************

// map is a method of an array ye apne under teen parameter leta hai number 1 Element number 2 uska 
// index and number 3 pora array 

// Ye hamen new array return krta hai

let array=[1,2,3,4,5,6,7,8,]

let newArray=array.map((ele)=>{

    return ele+1
 

})

console.log(array);
console.log(newArray);


// **************************** Filter METHOD ***********************************

// Filter bhi hamen new array return krta hai value ko filter out krke unpr condition match krke 
// and ye bhi teen parameter leta hai number 1 ele, number 2 index of that element ,number 3 whole array


let newArray2=array.filter((ele)=>{
   
    return ele%2==0

})

console.log(newArray2);


// **************************** Reduce METHOD ***********************************

// Reduce hamse do parameter leta hai ek hota hai prev value and ek hota curr value array main prev aur 
// current value ke sath jo bhi operation krwana chahen krwasakte hain aur ye ek value dega end main  
// hum ismain khud se values bhi desakte hain jhn se hamen start krna hai 

let newArray3=array.reduce((prev,curr)=>prev+curr,4)

console.log(newArray3);


// **************************** Find METHOD ***********************************
// ye hamen array mainse value dhondke deta hai 

let newArray4=array.find((ele)=>ele==4)

console.log(newArray4);

let obj=[
    {name:"ayan"},
    {name:"furqan"}
]

let findingAyan=obj.find((ele)=>ele.name=="ayan")
console.log(findingAyan);


// **************************** Sort METHOD ***********************************
// ye array ko sort krne main help krta hai

let array2=[1,5,8,4,9,6,7,8,3,2,11]

let newArray5=array2.sort((a,b)=>b-a)
console.log(newArray5);


let array3=[1,2,3,4,,5,66,6,]