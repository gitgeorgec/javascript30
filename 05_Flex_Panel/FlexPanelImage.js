const panels = document.querySelectorAll(".panel")

function toggleOne(){
	this.classList.toggle("open")
}

function toggleActive(e){
	if(e.propertyName.includes("flex")){
		this.classList.toggle("open-active")
	}
}

panels.forEach(function(item){
	item.addEventListener("click", toggleOne)
});

panels.forEach(function(item){
	item.addEventListener("transitionend", toggleActive)
})