function follow_height() {
	var height = document.getElementById("content-wrapper").offsetHeight;
	
	document.getElementById("sidebar").style.height = height-2 + "px";
}