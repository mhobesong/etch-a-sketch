createDIVs(256);

function createDIVs(number_of_divs){
	for (let i=0; i < number_of_divs; i++){
		let element = document.createElement("div");
		element.setAttribute("class", "grid-item");
		element.style.backgroundColor = "rgba(" + Math.floor(Math.random() * 257) + "," + Math.floor(Math.random() * 257) + "," + Math.floor(Math.random() * 257) + ", 0.1)";
		document.querySelector("#container").appendChild(element);
	}
}

document.querySelector("button").addEventListener("click", function(){
	let number_of_divs = parseInt(prompt("Enter the number of divs to display"));
	document.querySelector("#container").innerHTML = "";
	createDIVs(number_of_divs);
});
