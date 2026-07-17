var filter = function(arr, fn) {
    var newArr=[]
    for (let i = 0; i < arr.length; i++) {
       if(fn(arr[i],i)){
        newArr.push(arr[i])
    }
    
}
return newArr
   
    


};

filter(
    [0, 10, 20, 30],           
    function(n) {
        // console.log(n);  
        
        return n > 10;
    }
);

console.log(Boolean({}));





