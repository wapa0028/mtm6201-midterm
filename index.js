console.log('connected')

console.log(document.querySelector('.dropdown'))
let dropdown = document.querySelector('.dropdown')

dropdown.style.background = 'blue'

dropdown.addEventListener("click", () => {
 dropClick()
})

function dropClick(){
    let nav = document.querySelector('nav')
    let header = document.querySelector('header')
    header.classList.toggle('showHeader')

    if(nav.classList.contains('reveal')){
        setTimeout(() => {
            nav.classList.toggle('hidden')
        }, 1000)
    }else{
        nav.classList.toggle('hidden')
    }


    setTimeout(() => {
        nav.classList.toggle('reveal')
    }, 50)
}