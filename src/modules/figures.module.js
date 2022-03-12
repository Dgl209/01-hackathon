import {Module} from "../core/module";
import {getRandomColor, random} from "../utils";

let coordinateX
let coordinateY
let interval
const figuresArray = []

export class FiguresModule extends Module {
    trigger() {
        document.body.addEventListener('click', createFigures)
        interval = setInterval(() => {
            if (figuresArray[0]) {
                figuresArray[0].remove()
                figuresArray.shift()
            }
        }, 1000)

    }

    removeListener() {
        document.body.removeEventListener('click', createFigures)
        clearInterval(interval)
    }

}

function createFigures(event) {
    const randomNumber = random(1, 3)
    if (!event.target.closest('#menu')) {
        if (randomNumber === 1) {
            createFigure('triangle', 'triangle', coordinateX, coordinateY)
        } else if (randomNumber === 2) {
            createFigure('circle', 'circle', coordinateX, coordinateY)
        } else if (randomNumber === 3) {
            createFigure('square', 'square', coordinateX, coordinateY)
        }
    }
}

export function createFigure(name, classList) {
    name = document.createElement('div')
    name.classList.add(`${classList}`, 'figure')
    if (classList === 'triangle') {
        name.style.borderBottom = `100px solid ${getRandomColor()}`
    } else {
        name.style.background = getRandomColor()
    }
    name.style.top = `${coordinateY - 50}px`
    name.style.left = `${coordinateX - 50}px`
    document.body.append(name)
    figuresArray.push(name)
}

document.body.addEventListener('mousemove', event => {
    const { x, y } = event
    coordinateX = x
    coordinateY = y
})