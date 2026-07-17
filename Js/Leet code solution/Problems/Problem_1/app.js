var createCounter = function(n) {
   
   
   return function() { 
         let current = n;
        n = n--
        return current;
         
        
    };
    
    
   
};

const counter = createCounter(-2)

console.log(counter());
console.log(counter());

// console.log(b);








