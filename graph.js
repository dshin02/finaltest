// JavaScript Document
//variable list
var graphstate = 0
//function list
function graphswap() {
	if(graphstate <= 0){
	var graphstate = 1;
	document.getElementById("maingraph").src = "images/bar2.png";
	}
	else if(graphstate <= 1){
	var graphstate = 2;
	
	}
	else if(graphstate <= 2){
	var graphstate = 0;
	
	}
	else{
	var graphstate = 0;
	
	}
}

function alone(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#alonedesc")
	}
}
function public(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#publicdesc")
	}
}
function other(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#otherdesc")
	}
}
function home(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#homedesc")
	}
}
function walk(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#walkdesc")
	}
}
function carpool(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#carpooldesc")
	}
}
function bike(){
	if(graphstate <= 0){
	window.location.assign("datadescription.html#bikedesc")
	}
}

function alone2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function public2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function other2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function home2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function walk2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function carpool2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}
function bike2(){
	if(graphstate <= 1 && graphstate >= 1){
	window.location.assign("")
	}
}

function alone3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function public3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function other3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function home3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function walk3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function carpool3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
function bike3(){
	if(graphstate >= 2){
	window.location.assign("")
	}
}
//add event listener
document.getElementById("alone").addEventListener("click", alone)
document.getElementById("public").addEventListener("click", public)
document.getElementById("other").addEventListener("click", other)
document.getElementById("home").addEventListener("click", home)
document.getElementById("walk").addEventListener("click", walk)
document.getElementById("carpool").addEventListener("click", carpool)
document.getElementById("bike").addEventListener("click", bike)

document.getElementById("alone2").addEventListener("click", alone2)
document.getElementById("public2").addEventListener("click", public2)
document.getElementById("other2").addEventListener("click", other2)
document.getElementById("home2").addEventListener("click", home2)
document.getElementById("walk2").addEventListener("click", walk2)
document.getElementById("carpool2").addEventListener("click", carpool2)
document.getElementById("bike2").addEventListener("click", bike2)

document.getElementById("alone3").addEventListener("click", alone3)
document.getElementById("public3").addEventListener("click", public3)
document.getElementById("other3").addEventListener("click", other3)
document.getElementById("home3").addEventListener("click", home3)
document.getElementById("walk3").addEventListener("click", walk3)
document.getElementById("carpool3").addEventListener("click", carpool3)
document.getElementById("bike3").addEventListener("click", bike3)

document.getElementById("graphswapbutton").addEventListener("click", graphswap)