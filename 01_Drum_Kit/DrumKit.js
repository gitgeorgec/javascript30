
window.addEventListener("keydown", shoot);

function shoot(event){
		const press = document.querySelector(`.key[data-key="${event.key}"]`);
		const audio = document.querySelector(`audio[data-key="${event.key}"]`);
		if(!audio){return}
		audio.currentTime = 0;
		audio.play();
		press.classList.add("playing");
	}


const keys =document.querySelectorAll(".key");
keys.forEach(function(key){
	key.addEventListener("transitionend",removeTransition)
});

function removeTransition(event){
	if(event.propertyName !== "transform") return;
	this.classList.remove("playing");
}