import {arrayOfProjects} from "./projects.js"
import {capitalizeFirstLetter} from "./dropdown.js"
import {createBlock, createVid} from "./blocks.js"

export function filter(key, value){
	let main = document.querySelector("#main");
	if(main.innerHTML!==""){
		main.innerHTML="";
		createTitle(capitalizeFirstLetter(value));
		parseFilters(key, value);
	} else{
		parseFilters(key, value);
	}
}

function parseFilters(key, value){
	if(key==="years"){
		for(let i=0; i<arrayOfProjects.length;i++){
			if(arrayOfProjects[i].filters.year === value){
				createBlock(arrayOfProjects[i]);
			}
		}
	}
	if(key==="mediums"){
		for(let i=0; i<arrayOfProjects.length;i++){
			for(let j=0; j<arrayOfProjects[i].filters.medium.length; j++){
				if(arrayOfProjects[i].filters.medium[j]=== value){
					createBlock(arrayOfProjects[i]);
				}
			}
		}
	}
	if(key==="themes"){
		for(let i=0; i<arrayOfProjects.length;i++){
			for(let j=0; j<arrayOfProjects[i].filters.theme.length; j++){
				if(arrayOfProjects[i].filters.theme[j]=== value){
					createBlock(arrayOfProjects[i]);
				}
			}
		}
	}
}
	
//need to fix mobile autoplay
//need to do css shit (GRID, grandparent)


function createTitle(title){
	console.log("appended")
	let filterTitle = document.createElement("h2");
	filterTitle.id = "filterTitle"
	filterTitle.innerHTML = title
	main.append(filterTitle);
}