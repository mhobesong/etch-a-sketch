createDIVs(256);

function createDIVs(number_of_divs){
	for (let i=0; i < number_of_divs; i++){
		let element = document.createElement("div");
		element.setAttribute("class", "grid-item");
		element.style.backgroundColor = "white";
		element.style.opacity = 0;

		element.addEventListener("mouseover", function(e){
			e.target.style.backgroundColor = "black";
			e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.4;
		});

		document.querySelector("#container").appendChild(element);
	}
}

document.querySelector("button").addEventListener("click", function(){
	let number_of_divs = parseInt(prompt("Enter the number of divs to display", 300));
	document.querySelector("#container").innerHTML = "";
	createDIVs(number_of_divs);
});
