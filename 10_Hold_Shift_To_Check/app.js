const checkboxes = document.querySelectorAll('.checkbox')

let lastChecked

function handleCheck(e){
	let inBetween = false
	if(e.shiftKey && this.checked){
		checkboxes.forEach(checkbox=>{
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween
			}
			if(inBetween){
				checkbox.checked =true
			}
		})
	}
	this.checked?lastChecked=this:lastChecked
}

checkboxes.forEach(checkbox=>checkbox.addEventListener("click",handleCheck))

