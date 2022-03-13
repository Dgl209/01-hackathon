import './styles.css'
import {cleanBody} from "./utils";
import {ContextMenu} from "./menu";
import {FiguresModule} from "./modules/figures.module";


const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule('figures', 'Create figure')
const menu = document.querySelector('#menu')



let coordinateX
let coordinateY

contextMenu.add(figuresModules)




document.body.addEventListener('contextmenu', event => {
    event.preventDefault()
    contextMenu.open()
    menu.style.top = `${coordinateY}px`
    menu.style.left = `${coordinateX}px`
})

menu.addEventListener('click', event => {
    
    if (event.target.dataset.type === 'figures') {
        cleanBody()
        figuresModules.removeListener()
        figuresModules.trigger()
    }
   
   

    contextMenu.close()
})

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})