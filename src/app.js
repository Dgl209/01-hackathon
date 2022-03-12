import './styles.css'
import {cleanBody} from "./utils";
import {ContextMenu} from "./menu";
import {FiguresModule} from "./modules/figures.module";
import {customsmsModule} from "./modules/customsms.module"

const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule('figures', 'Create figure')
const menu = document.querySelector('#menu')
const custom = new customsmsModule('custom-sms', 'Custom Notification')

let coordinateX
let coordinateY

contextMenu.add(figuresModules)
contextMenu.add(custom)

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
    else if (event.target.dataset.type === 'custom-sms') {
        custom.trigger()
        contextMenu.close()
    }
    contextMenu.close()
})

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})