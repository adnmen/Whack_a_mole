const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })

  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assing the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = result + 1
      score.textContent = result
    }
  })
})


function moveMole() {

  timerId = setInterval(randomSquare, 750)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000)