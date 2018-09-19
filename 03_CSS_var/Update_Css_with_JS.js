const inputs = document.querySelectorAll("input")

console.log(inputs)

function handleUpdate(){
	const suffix = this.dataset.sizing || ""
	console.log(suffix)
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function(inside){
	inside.addEventListener("change", handleUpdate)
})
inputs.forEach(function(inside){
	inside.addEventListener("mousemove", handleUpdate)
})

