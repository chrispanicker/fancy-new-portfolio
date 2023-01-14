let name = document.querySelector("#name");
let nameInterval;
name.addEventListener("mouseover", event => {fun(event)});
name.addEventListener("mouseleave", event => {noFun(event)});

function fun(e){
	let fullName = "Chris Panicker";
	name.innerHTML="Chris Panicker!"
	nameInterval = setInterval(function(){name.innerHTML=name.innerHTML+"!"}, 100)
}

function noFun(e){
	name.innerHTML="Chris Panicker"
	clearInterval(nameInterval);
}