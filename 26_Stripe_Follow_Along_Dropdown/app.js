const navbarItems = document.querySelectorAll(".navbar__item")
const background = document.querySelector(".background")
const navbar = document.querySelector(".navbar")


function handlemouseEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')) {
          this.classList.add('trigger-enter-active');
        }
      } ,10);
    const dropdown = this.querySelector(".dropdown")
    const dropdownCoords =dropdown.getBoundingClientRect()
    const navcoords = navbar.getBoundingClientRect()
    const coord = {
        width:dropdownCoords.width,
        height:dropdownCoords.height,
        top:dropdownCoords.top+window.scrollY,
        left:dropdownCoords.left+window.scrollX
    }
    background.style.width=`${coord.width}px`
    background.style.height=`${coord.height}px`
    background.style.transform = `translate(${coord.left}px,${coord.top}px)`
    background.classList.add('open')
}

function handlemouseOut(){
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    background.classList.remove('open')
}

navbarItems.forEach(Item=>{
    Item.addEventListener("mouseenter", handlemouseEnter)
    Item.addEventListener("mouseleave", handlemouseOut)
})