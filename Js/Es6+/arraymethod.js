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




