import {arrayOfProjects} from "./projects.js"
import {filter} from "./filter.js"
let filterTypes = {years: [], mediums:[], themes:[]};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//years
for(let i=0; i<arrayOfProjects.length; i++){
	if(!filterTypes.years.includes(arrayOfProjects[i].filters.year)){
		filterTypes.years.push(arrayOfProjects[i].filters.year)
	}
}

//mediums
for(let i=0; i<arrayOfProjects.length; i++){
	//this for loop iterates thru arrays in medium
	for(let j=0; j<arrayOfProjects[i].filters.medium.length; j++){
		if(!filterTypes.mediums.includes(arrayOfProjects[i].filters.medium[j])){
			filterTypes.mediums.push(arrayOfProjects[i].filters.medium[j])
		}
	}	
}

//themes
for(let i=0; i<arrayOfProjects.length; i++){
	//this for loop iterates thru arrays in medium
	for(let j=0; j<arrayOfProjects[i].filters.theme.length; j++){
		if(!filterTypes.themes.includes(arrayOfProjects[i].filters.theme[j])){
			filterTypes.themes.push(arrayOfProjects[i].filters.theme[j])
		}
	}	
}

filterTypes.years.sort();
filterTypes.mediums.sort();
filterTypes.themes.sort();

let yearEl = document.querySelector("#yearEl");
let medEl = document.querySelector("#medEl");
let themeEl = document.querySelector("#themeEl");

let yearMobileEl = document.querySelector("#yearMobileEl");
let medMobileEl = document.querySelector("#medMobileEl");
let themeMobileEl = document.querySelector("#themeMobileEl");

for(const [key, value] of Object.entries(filterTypes)){
	if(key==="years"){
		let dropParent = document.createElement("div");
		let dropParentMobile = dropParent.cloneNode(true);
		dropParent.classList.add("dropParent");
		for(let i=0; i<value.length; i++){
			dropParent.append(createDrop(key, value, i));
			yearEl.append(dropParent);
			yearMobileEl.append(dropParentMobile);
		}
	} else if(key==="mediums"){
		let dropParent = document.createElement("div");
		let dropParentMobile = dropParent.cloneNode(true);
		dropParent.classList.add("dropParent");
		for(let i=0; i<value.length; i++){
			dropParent.append(createDrop(key, value, i));
			medEl.append(dropParent);
			medMobileEl.append(dropParentMobile);
		}
	} else if(key==="themes"){
		let dropParent = document.createElement("div");
		let dropParentMobile = dropParent.cloneNode(true);
		dropParent.classList.add("dropParent");
		for(let i=0; i<value.length; i++){
			dropParent.append(createDrop(key, value, i));
			themeEl.append(dropParent);
			themeMobileEl.append(dropParentMobile);
		}
	}
}


function createDrop(key, value, index){
	let drop = document.createElement("button");
	drop.innerHTML= capitalizeFirstLetter(value[index]);
	drop.type = key
	drop.onclick = function(){filter(key, value[index])};
	drop.classList.add("dropdown-content");
	return drop;
}