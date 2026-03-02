var input = document.getElementById("input");

function makeblue() {
	input.style.backgroundColor = "red";
}

// ---------------------------Chapter 49------------------------

function checkfieldvalue(email) {
	if (document.getElementById(email).value == "ayanaano5@gmail.com") {
		alert("your email is correct");
	} else {
		alert("thenga");
	}
}

// ---------------------- chapter 50-------------------------------

function fillCity() {
	var cityName;
	var zipEntered = document.getElementById("zip").value;
	switch (zipEntered) {
		case "60608":
			cityName = "Chicago";
			break;
		case "68114":
			cityName = "Omaha";
			break;
		case "53212":
			cityName = "Milwaukee";
	}
	document.getElementById("city").value = cityName;
    alert(cityName)
}


