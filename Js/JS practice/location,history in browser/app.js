var whereWeAt=location.href;
console.log(whereWeAt);

var theDomain=location.hostname
console.log(theDomain);

var theHash=location.hash
console.log(theHash);

var newlocation=location.href="http://www.google.com"

var thepath=location.pathname
console.log(pathname);



// isse user el url back chale jayega 
history.back()

// isse user rk url agey chale jayega
history.forward()

// user ko agr hum chahen to zyada back bhi lejasakte hain 
history.go(-3)

// user ko agr hum chahen to zyada forward bhi lejasakte hain
history.go(3)