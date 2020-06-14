const h2 = document.getElementById('spirit-animal')

const input = document.getElementById('name-input')

const button = document.getElementById('submit')
const form = document.getElementById('spirit-form')

const spiritAnimals = [
  'Tiger',
  'bear',
  'dolphin',
  'ox',
  'penguin',
  'dragon',
  'orc',
]

const mapFunction = (value, index) => {
  if (index === 1) {
    return
  } else {
    return value
  }
}

const newSpirit = spiritAnimals.map()

console.log(newSpirit)
function getRandomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length)
}

let eventType = 'submit'

const mouseover = document.getElementById('mouseover')
const click = document.getElementById('click')
const change = document.getElementById('change')

mouseover.addEventListener('click', function () {
  eventType = 'mouseover'
  console.log(eventType)
})

click.addEventListener('click', function () {
  eventType = 'click'
  console.log(eventType)
})

change.addEventListener('click', function () {
  eventType = 'change'
  console.log(eventType)
})

button.addEventListener('click', function (event) {
  event.preventDefault()
  const userInput = input.value.trim()

  if (userInput) {
    const spiritAnimal = spiritAnimals[getRandomNumber()]

    const userSpiritName = userInput + ' - ' + spiritAnimal
    const userTemplateString = `${userInput} - ${spiritAnimal}`

    h2.innerHTML = userTemplateString
  }

  if (!userInput) {
    console.log('there is not input here')
  }

  input.innerHtml = ''
})
