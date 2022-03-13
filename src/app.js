import './styles.css'
import {ContextMenu} from "./menu"
import {FiguresModule} from "./modules/figures.module"
import {CardMemoryGameModule} from "./modules/card-memory-game.module"
import {BackgroundModule} from "./modules/background.module"
import {CustomSMSModule} from "./modules/customsms.module"
import {HoverBoardModule} from "./modules/hover-board.module"

const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule()
const cardMemoryGameModule = new CardMemoryGameModule()
const customSMSModule = new CustomSMSModule('custom-sms', 'Custom Notification')
const backgroundModule = new BackgroundModule('background', 'Change background')
const hoverBoardModule = new HoverBoardModule()
const menu = document.querySelector('#menu')

let coordinateX
let coordinateY

contextMenu.add(figuresModules)
contextMenu.add(cardMemoryGameModule)
contextMenu.add(customSMSModule)
contextMenu.add(backgroundModule)
contextMenu.add(hoverBoardModule)

document.body.addEventListener('contextmenu', event => {
  event.preventDefault()
  contextMenu.open()
  menu.style.top = `${coordinateY}px`
  menu.style.left = `${coordinateX}px`
})

menu.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.dataset.type === 'figures') {
        cleanBody()
        removalListeners()
        figuresModules.trigger()
    } else if (event.target.dataset.type === 'card-memory-game') {
        cleanBody()
        removalListeners()
        cardMemoryGameModule.trigger()
    } else if (event.target.dataset.type === 'background') {
        cleanBody()
        removalListeners()
        backgroundModule.trigger()
    } else if (event.target.dataset.type === 'custom-sms') {
        cleanBody()
        removalListeners()
        customSMSModule.trigger()
    } else if (event.target.dataset.type === 'hover-board') {
        cleanBody()
        removalListeners()
        hoverBoardModule.trigger()
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
    backgroundModule.removeListener()
    customSMSModule.removeListener()
    hoverBoardModule.removeListener()
}