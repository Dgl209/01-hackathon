import './styles.css'
import {cleanBody} from "./utils";
import {ContextMenu} from "./menu";
import {FiguresModule} from "./modules/figures.module";
import {customsmsModule} from "./modules/customsms.module"
import { randomsoundModule } from './modules/randomsound.module';


const contextMenu = new ContextMenu('#menu')
const figuresModules = new FiguresModule('figures', 'Create figure')
const menu = document.querySelector('#menu')
const customModules = new customsmsModule('custom-sms', 'Custom Notification')
const randomSoundModules = new randomsoundModule('random-sound','Random Sound')


let coordinateX
let coordinateY

contextMenu.add(figuresModules)
contextMenu.add(customModules)
contextMenu.add(randomSoundModules )



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
        customModules.trigger()
        contextMenu.close()
    }
    else if (event.target.dataset.type === 'random-sound') {
        randomSoundModules.trigger()
        contextMenu.close()
    }
   

    contextMenu.close()
})

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})