createDIVs(256);

function createDIVs(number_of_divs){
	for (let i=0; i < number_of_divs; i++){
		let element = document.createElement("div");
		element.setAttribute("class", "grid-item");

		let red = Math.floor(Math.random() * 257);
		let green = Math.floor(Math.random() * 257);
		let blue = Math.floor(Math.random() * 257);

		element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		element.style.opacity = 0.1;

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
