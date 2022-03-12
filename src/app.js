import './styles.css'
import {cleanBody} from "./utils";
import {ContextMenu} from "./menu";
import {FiguresModule} from "./modules/figures.module";
import {BackgroundModule} from "./modules/background.module";

const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule('figures', 'Create figure')
const backgroundModule = new BackgroundModule('background', 'Change background')
const menu = document.querySelector('#menu')

let coordinateX
let coordinateY

contextMenu.add(figuresModules)
contextMenu.add(backgroundModule)

document.body.addEventListener('contextmenu', event => {
  event.preventDefault()
  contextMenu.open()
  menu.style.top = `${coordinateY}px`
  menu.style.left = `${coordinateX}px`
})

menu.addEventListener('click', event => {
  cleanBody()

  if (event.target.dataset.type === 'figures') {
    removeEventListeners()
    figuresModules.trigger()
  }
  if (event.target.dataset.type === 'background') {
    removeEventListeners()
    backgroundModule.trigger()
  }

  contextMenu.close()
})

document.body.addEventListener('mousemove', event => {
  const {x, y} = event
  coordinateX = x
  coordinateY = y
})

function removeEventListeners() {
  figuresModules.removeListener()
  backgroundModule.removeListener()
}