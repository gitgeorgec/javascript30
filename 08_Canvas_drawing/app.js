console.log("linked")

const canvas = document.querySelector("#draw")

const ctx =canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let isdrawing = false
let lastX = 0
let lastY = 0
let color = 0
let direction = true

function draw(e){
	if(!isdrawing) return
	
	ctx.beginPath()
	ctx.moveTo(lastX, lastY)
	ctx.lineTo(e.offsetX, e.offsetY)
	ctx.stroke()
	lastX = e.offsetX
	lastY = e.offsetYs
	ctx.strokeStyle = `hsl(${color},100%,50%)`
	color===360?color=0:color++

	direction?ctx.lineWidth++:ctx.lineWidth--
	(ctx.lineWidth>=200 || ctx.lineWidth<=10)?direction=!direction:direction
}

canvas.addEventListener("mousedown", (e)=> {
	isdrawing = true
	lastX = e.offsetX
	lastY = e.offsetY	
	console.log(isdrawing)

})

canvas.addEventListener("mouseup", ()=> {
	isdrawing=false
	console.log(isdrawing)
})
canvas.addEventListener("mouseout", ()=> {
	isdrawing=false
	console.log(isdrawing)
})

canvas.addEventListener("mousemove", draw)