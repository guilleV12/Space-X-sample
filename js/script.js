const btn = document.querySelector('#menu-btn')
const overlay = document.querySelector('#overlay')
const menu = document.querySelector('#mobile-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false

btn.addEventListener('click', navToggle)
document.addEventListener('scroll', scrollPage)

function navToggle() {
  btn.classList.toggle('open')
  overlay.classList.toggle('overlay-show')
  document.body.classList.toggle('stop-scrolling')
  menu.classList.toggle('show-menu')
}

function scrollPage() {
  const scrollPos = window.scrollY

  if (scrollPos > 100 && !scrollStarted) {
    countUp()
    scrollStarted = true
  } else if (scrollPos < 100 && scrollStarted) {
    scrollStarted = false
    reset()
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
      const target = Number(counter.getAttribute('data-target'))
      
      const c = Number(counter.innerText)

      const increment = target / 100

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`

        setTimeout(updateCounter, 75)
      } else {
        counter.innerText = target
      }
    }

    updateCounter()
  })
}

function reset() {
  counters.forEach((counter) => {
    counter.innerHTML = '0'
  })
}

window.addEventListener('load', () => {
  window.scrollTo(0,0)
  console.log('a')
})