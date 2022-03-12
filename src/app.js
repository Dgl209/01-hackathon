import './styles.css'
import {ContextMenu} from "./menu";
import {FiguresModule} from "./modules/figures.module";
import {CardMemoryGameModule} from "./modules/card-memory-game.module";

const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule('figures', 'Create figure')
const cardMemoryGameModule = new CardMemoryGameModule()
const menu = document.querySelector('#menu')

let coordinateX
let coordinateY

contextMenu.add(figuresModules)
contextMenu.add(cardMemoryGameModule)

document.body.addEventListener('contextmenu', event => {
    event.preventDefault()
    contextMenu.open()
    menu.style.top = `${coordinateY}px`
    menu.style.left = `${coordinateX}px`
})

menu.addEventListener('click', event => {
    if (event.target.dataset.type === 'figures') {
        cleanBody()
        removalListeners()
        figuresModules.trigger()
    } else if (event.target.dataset.type === 'card-memory-game') {
        cleanBody()
        removalListeners()
        cardMemoryGameModule.trigger()
    }
    contextMenu.close()
})

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})

function cleanBody() {
    while (document.body.childNodes.length > 2) {
        document.body.removeChild(document.body.lastChild)
    }
}

function removalListeners() {
    figuresModules.removeListener()
    cardMemoryGameModule.removeListener()
}