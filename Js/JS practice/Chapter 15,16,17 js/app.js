var array=["mango","apple","bnana","peach","orange","lemon"]
console.log(array[0]);

// We can enter multiple data types in array
var array=[1, "ayan", true, ]

// 


// Chapter 16 Adding and removing from the ARRAY 

var array2=["ayan","jawaid","iqbal","farhan"]

array2[1]="ubaid"
array2[0]="bilal"


// pop is used for removing element from the last 
array2.pop()

// push is used for adding element in the last 
array2.push("farhan","iqbal")


// agr hum pop ko log krenge to hamen woh milega jo nikla hai array se
// aur agr hum push ko log krenge to hamen length of the array milegi

console.log(array2);

// chapter 17 removing,inserting and extracting elements 

// shift is used for removing element from the start

var array3=["ayan","jawaid","iqbal","farhan"]
array3.shift()
console.log(array3);

// unshift is used for adding element in the start

var array3=["ayan","jawaid","iqbal","farhan"]
array3.unshift("shazz")
console.log(array3);


// splice is used for inserting deleting and removing alue from the array 

var array4=["ayan","jawaid","iqbal","farhan"]
array4.splice(2,0,"naeem")
console.log(array4);

// while slice is just used for copying the array

var array5=["ayan","jawaid","iqbal","farhan"]
array5.slice(1,2)

console.log(array5.slice(1,2));






