export function createBlock(project){
	let main = document.querySelector("#main");
	let blockGrandParent = document.createElement("div");
	let blockParent1 = document.createElement('div');
	let blockParent2 = document.createElement('div');

	blockGrandParent.id="blockGrandparent";
	blockParent1.id="blockParent1";
	blockParent2.id="blockParent2";

	//for loop to create the right amount of images
	for(let i=0; i<project.src.length; i++){
		if(project.src[i].includes("mov")){
			let thisVid = createVid();
			thisVid.src = project.src[i];
			blockParent1.append(thisVid);

		} else if(project.src[i].includes("mp4")){
			let thisVid = createVid();
			thisVid.src = project.src[i];
			blockParent1.append(thisVid);
		} else{
			let thisImg = document.createElement("img");
			thisImg.id = "image";
			thisImg.src = project.src[i];
			blockParent1.append(thisImg);
		}
	}

	let titleEl = document.createElement('h2');
	let descEl = document.createElement("p")
	titleEl.innerHTML = project.title;
	descEl.innerHTML = project.desc;
	blockParent2.append(titleEl, descEl);
	blockGrandParent.append(blockParent1, blockParent2);
	main.append(blockGrandParent)
}

export function createVid(){
	let vid = document.createElement("video");
	vid.id = "image";
	vid.autoplay = true;
	vid.controls = true;
	vid.loop = true;
	vid.muted = true;
	vid.playsinline = true;
	return vid;
}