let homeEl=document.querySelector("#home");
let overlay = document.createElement("div");
let instructions = document.createElement("h2");
let instructionsMobile = document.createElement("h2");
overlay.id="overlay";
instructions.id="instructions";
instructionsMobile.id="instructionsMobile";
instructions.classList.add("desktopOnly");
instructionsMobile.classList.add("mobileOnly");
instructions.innerHTML="Hey! Just click anywhere to change the background video here :)"
instructionsMobile.innerHTML="Hey! Just tap anywhere to change the background video here :)"

overlay.onclick = function(){
	overlay.classList.add("hide")
	setTimeout(() =>{overlay.style.display = "none";}, 200)
};

overlay.append(instructions, instructionsMobile);
homeEl.append(overlay);