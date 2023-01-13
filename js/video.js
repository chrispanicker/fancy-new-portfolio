import {arrayOfProjects} from "./projects.js"
let videoEl = document.querySelector("#fullscreenVid");
let lastVideo = "./assets/videos/book.mp4"

function changeVid(){
	let randomProject = arrayOfProjects[Math.floor(Math.random()*arrayOfProjects.length)];
	if(randomProject.src[0].includes("jpeg")||randomProject.src[0].includes("png")){
		changeVid();
	}else{
		videoEl.src = randomProject.src[0];
		lastVideo=randomProject.src[0];
	}
}

videoEl.onclick = function(){changeVid()};