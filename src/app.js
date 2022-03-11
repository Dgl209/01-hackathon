import './styles.css'
import {ContextMenu} from "./menu";

const contextMenu = new ContextMenu('#menu')
const menu = document.querySelector('#menu')
let coordinateX
let coordinateY

document.body.addEventListener('contextmenu', event => {
    event.preventDefault()
    contextMenu.open()
    menu.style.top = `${coordinateY}px`
    menu.style.left = `${coordinateX}px`
})

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})

menu.addEventListener('click', event => {
    // if (event.target.dataset.type === 'test') {
    //     testModule.trigger()
    // }
    contextMenu.close()
})
