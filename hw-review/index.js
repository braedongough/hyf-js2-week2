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

function getRandomNumber() {
    return Math.floor(Math.random() * spiritAnimals.length)
}

function handleShowSpiritAnimal(event) {
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
}

let eventType = 'click'

const radios = document.getElementsByName('event-type')

function handleRadioClick(event) {
    button.removeEventListener(eventType, handleShowSpiritAnimal)

    eventType = event.target.value
    button.addEventListener(eventType, handleShowSpiritAnimal)
}

radios.forEach((radio) => {
    radio.addEventListener('click', handleRadioClick)
})

button.addEventListener(eventType, handleShowSpiritAnimal)
