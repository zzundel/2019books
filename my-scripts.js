//set count in the database
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update html to reflect database count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Do you want to build a snowman?....in summer...")) {
    	localStorage.setItem("count",0);
		update();
	}
}