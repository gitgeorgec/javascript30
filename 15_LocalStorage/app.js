const addItems = document.querySelector("form")
const itemList = document.querySelector(".tapas-list")
const items = JSON.parse(localStorage.getItem('items')) || []

function toggleDone (e){
    e.target.classList.toggle("done")
    items[e.target.id].done = !items[e.target.id].done
    localStorage.setItem('items', JSON.stringify(items))
}

function renderList(){
    itemList.innerHTML = items.map((tapas, i)=>{
        return `
            <li class=${tapas.done?"done":"null"} id=${i}>${tapas.item}</li>
        `
    }).join("")

    const list = document.querySelectorAll("li")
    list.forEach(item=>item.addEventListener("click",toggleDone))

    localStorage.setItem('items', JSON.stringify(items))
}

function handleSubmit(e){
    e.preventDefault()
    const item = this.querySelector("#tapas").value
    const tapas = {
        item,
        done:false
    }
    items.push(tapas)
    
    renderList()
    addItems.reset()
}


addItems.addEventListener("submit", handleSubmit)
renderList()
