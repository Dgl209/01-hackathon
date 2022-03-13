import {Module} from "../core/module"

export class customsmsModule extends Module {
   constructor() {
      super( 'custom-sms', 'Custom Notification' )
      this.fact = document.createElement('h1')
      this.fact.classList.add('fact')
      this.notifElem = document.createElement('div')
      this.notifElem.classList.add('notification')
      this.left_noth_prem = document.createElement('div')
      this.left_noth_prem.classList.add('left_noth_prem')
      this.title = document.createElement('div')
      this.title.classList.add('title')
      this.title.textContent = 'Вы получили уведомление'
      this.descr = document.createElement('div')
      this.descr.classList.add('descr')
      this.descr.textContent = 'У меня есть интересный факт! Рассказать?'
      this.btns = document.createElement('div')
      this.btns.classList.add('btns')
      this.href = document.createElement('a')
      this.href.dataset.href = '#'
      this.href.classList.add('btn')
      this.href.textContent ='Конечно!'
        
      document.body.append(this.fact)
      document.body.append(this.notifElem)
      this.notifElem.append(this.left_noth_prem)
      this.left_noth_prem.append(this.title)
      this.left_noth_prem.append(this.descr)
      this.left_noth_prem.append(this.btns)
      this.btns.append(this.href)
}
 
trigger() {
   const notif = {
      openNotif:() => this.notifElem.classList.add('go'),
      closeNotif: () => this.notifElem.classList.remove('go')
   }

    setTimeout(() => {
      notif.openNotif()
      setTimeout(() => {
         notif.closeNotif()
      },5000)
   },1000)

const randomFacts = ['Мужчины, у которых есть коты, считаются более счастливыми в любви.', 'Пчёл и ос можно научить искать взрывчатые вещества и наркотики, как собак.', 'Галапагосские черепахи могут жить до 150 лет и на протяжении целого года обходиться без пищи и воды.', 'В Гамбурге есть детский сад для мужчин.', 'Путешествовать полезно для умственного здоровья, а также это снижает риск сердечного приступа и депрессии.', 'По данным исследования, средний IQ человека вырос примерно на 20% с 1950-х годов.', 'В Канаде озер больше, чем в любой другой стране.', 'Компания Google зарабатывает примерно 700 долларов в секунду.']
   
this.btns.addEventListener('click', event => {
   event.preventDefault()

   setTimeout(() => {
      notif.closeNotif()
   },100)
      
   setTimeout(() => {
      let rand = Math.floor(Math.random() * randomFacts.length)
      this.fact.innerHTML =`А вот тебе и интересный факт  -  ${randomFacts[rand]}`
      }, 1500)
      setTimeout(() => {
      this.fact.innerHTML = ''
      },7000)
   })
}}
