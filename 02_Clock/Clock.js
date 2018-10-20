const secondhand = document.querySelector(".second-hand")
const minhand = document.querySelector(".min-hand")
const hourhand = document.querySelector(".hour-hand")

function setData(){
	const now = new Date();

	const seconds = now.getSeconds();
	const secondDegrees = seconds * 6 + 90;
	secondhand.style.transform = `rotate(${secondDegrees}deg)`

	const mins = now.getMinutes();
	const minsDegree = mins * 6 + 90;
	minhand.style.transform = `rotate(${minsDegree}deg)`

	const hours = now.getHours();
	const hoursDegree = hours * 30 + 90;
	hourhand.style.transform = `rotate(${hoursDegree}deg)`

}
setData()
setInterval(setData, 1000);