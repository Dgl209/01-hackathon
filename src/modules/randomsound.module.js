import {Module} from "../core/module"


export class randomsoundModule extends Module {
   constructor() {
      super('random-sound','Random Sound')
      this.btn = document.createElement('button')
      this.btn.classList.add('start-button js-start')
      } 
      
      trigger() {
         this.btn.addEventListener('click',() => {
            playSound()
         })
         
         function playSound() {
            let firstSound = new Audio("https://www.mediacollege.com/downloads/sound-effects/alien/laser-01.mp3")
            let secondtSound = new Audio("https://www.mediacollege.com/downloads/sound-effects/money/cash-register-02.wav")
            let threeSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
            let foursSound = new Audio("https://www.mediacollege.com/downloads/sound-effects/people/laugh/laugh-man-01.wav")
            const soundContainer = [firstSound,secondtSound, threeSound, foursSound]
            let rand = Math.floor(Math.random() * soundContainer.length)
            if(rand === 0) {
            audio.play()
         }
            if(rand === 1) {
            audionext.play()  
         }
         
            if(rand === 2) {
            audionextt.play()    
         }
            if(rand === 3) {
            audionexttt.play()   
         }
         }
      }
   }
   

