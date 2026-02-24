// Date

var rightnow=new Date()
var getday=rightnow.getDay()
var getmonth=rightnow.getMonth()
var gethours=rightnow.getHours()
var getseconds=rightnow.getSeconds()
var gethours=rightnow.getHours()
var getyear=rightnow.getFullYear()
var date=rightnow.getDate()
console.log(rightnow);
console.log(getday);
console.log(getmonth);
console.log(gethours);
console.log(getseconds);
console.log(getyear);
console.log(date);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today=dayNames[getday]
console.log(today);


// chapter 33

// We can manually give the date
var newdate=new Date("Sep 13,2005")

// agr hamen millsiseconds chaiye is date tk ke

var NewDateMilli=newdate.getTime()

// Ab hum hamari current date ke millisecond nikalenge ye hamen 1 january 1970 se lekr ab tk ke millisecond btayega

var currentDatemilli=rightnow.getTime()


// Now for finding difference between them

var diff=currentDatemilli-NewDateMilli

// now convert the milliseconds to days 

var fdiff=diff/(1000*60*60*24)
console.log(Math.floor(fdiff));

 

// ------------------------- W














