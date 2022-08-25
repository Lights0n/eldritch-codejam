import ancientsData from '../data/ancients2.js'
const Azatoth = document.getElementById('azathoth-card');
const Cthulthu = document.getElementById('cthulthu-card');
const IogSothoth = document.getElementById('iogSothoth-card');
const ShubNiggurath = document.getElementById('shubNiggurath-card');

// cards
const fSGreen = document.querySelector('.first-stage-green');
const fSblue = document.querySelector('.first-stage-blue');
const fSBrown = document.querySelector('.first-stage-brown');

const sSGreen = document.querySelector('.second-stage-green');
const sSblue = document.querySelector('.second-stage-blue');
const sSBrown = document.querySelector('.second-stage-brown');

const thSGreen = document.querySelector('.third-stage-green');
const thSblue = document.querySelector('.third-stage-blue');
const thSBrown = document.querySelector('.third-stage-brown');

const copacity = document.querySelector('.copacity');
const copacityGreenn = document.querySelector('.copacity-green');
const copacityBrown = document.querySelector('.copacity-brown');
const copacityBlue = document.querySelector('.copacity-blue');


const AncientName = document.querySelector('.main__ancient-name');
const ancients = document.querySelectorAll('.main__item');
let chosenAncient;
let difficulty
let copacityVal
let greenVal
let brownVal
let blueVal


function cardTracker() {
  for (let ancient of ancients) {
    ancient.classList.remove('active-ancient')
  }

  if (chosenAncient == 'azathoth') {
    Azatoth.classList.add('active-ancient')
  }
  else if (chosenAncient == 'cthulhu') {
    Cthulthu.classList.add('active-ancient')
  }
  else if (chosenAncient == 'iogSothoth') {
    IogSothoth.classList.add('active-ancient')
  }
  else if (chosenAncient == 'shubNiggurath') {
    ShubNiggurath.classList.add('active-ancient')
  }
  let ddd = ancientsData.map(el => {
    if (el.id == chosenAncient) {
      fSGreen.textContent = el.firstStage.greenCards
      fSblue.textContent = el.firstStage.blueCards
      fSBrown.textContent = el.firstStage.brownCards
      sSGreen.textContent = el.secondStage.greenCards
      sSblue.textContent = el.secondStage.blueCards
      sSBrown.textContent = el.secondStage.brownCards
      thSGreen.textContent = el.thirdStage.greenCards
      thSBrown.textContent = el.thirdStage.brownCards
      thSblue.textContent = el.thirdStage.blueCards
    }

    copacity.textContent = `Всего в колодах: ${+fSGreen.innerHTML
      + +fSblue.innerHTML
      + +fSBrown.innerHTML
      + +sSGreen.innerHTML
      + +sSblue.innerHTML
      + +sSBrown.innerHTML
      + +thSGreen.innerHTML
      + +thSBrown.innerHTML
      + +thSblue.innerHTML}
      `
    greenVal = +fSblue.innerHTML
      + +sSblue.innerHTML
      + +thSblue.innerHTML;
    brownVal = +fSBrown.innerHTML
      + +sSBrown.innerHTML
      + +thSBrown.innerHTML
    blueVal = +fSGreen.innerHTML
      + +sSGreen.innerHTML
      + +thSGreen.innerHTML
    copacityGreenn.textContent = `Всего синих: ${greenVal}`
    copacityBrown.textContent = `Всего каричневых: ${brownVal}`
    copacityBlue.textContent = `Всего зеленых: ${blueVal}`
  })
}

Azatoth.addEventListener('click', () => {
  chosenAncient = 'azathoth'
  AncientName.textContent = 'Азатот';
  cardTracker()
})

Cthulthu.addEventListener('click', () => {
  chosenAncient = 'cthulhu'
  AncientName.textContent = 'Ктулху';
  cardTracker()
})

IogSothoth.addEventListener('click', () => {
  chosenAncient = 'iogSothoth'
  AncientName.textContent = 'Йог-Сотот';
  cardTracker()
})

ShubNiggurath.addEventListener('click', () => {
  chosenAncient = 'shubNiggurath'
  AncientName.textContent = 'Шуб-Ниггурат';
  cardTracker()
})

// difficulties

// difficulty-easy
// difficulty-medium
// difficulty-hard
// difficulty-expta-hard

const difficultyCnt = document.querySelector('.main__difficulty');
const labels = document.getElementsByTagName("label")

const difficultyExtraEasy = document.getElementById('difficulty-extra-easy');
const difficultyEasy = document.getElementById('difficulty-easy');
const difficultyMedium = document.getElementById('difficulty-medium');
const difficultyHard = document.getElementById('difficulty-hard');
const difficultyExtraHard = document.getElementById('difficulty-expta-hard');

let myDifficulty
// styles for chosen difficulty
function activeDifficulty(chosen) {
  for (let label of labels) {
    label.classList.remove('active')

    if (label.htmlFor === chosen.id) {
      console.log(chosen.id);
      label.classList.add('active')
      myDifficulty = chosen.id
      console.log(myDifficulty);
    }
  }
}
difficultyCnt.addEventListener('click', () => {
  if (difficultyExtraEasy.checked) {
    // console.log('ExtraEasy ON');
    activeDifficulty(difficultyExtraEasy)
  }
  else if (difficultyEasy.checked) {
    // console.log('difficultyEasy');
    activeDifficulty(difficultyEasy)
  }
  else if (difficultyMedium.checked) {
    // console.log('difficultyMedium');
    activeDifficulty(difficultyMedium)
  }
  else if (difficultyHard.checked) {
    // console.log('difficultyHard');
    activeDifficulty(difficultyHard)
  }
  else if (difficultyExtraHard.checked) {
    // console.log('difficultyExtraHard');
    activeDifficulty(difficultyExtraHard)
  }
})

// cards faces

import cardsDataGreen from '../data/MythicCards/green/index.js'
import cardsDataBrown from '../data/MythicCards/brown/index.js'
import cardsDataBlue from '../data/MythicCards/blue/index.js'

const currentCard = document.getElementById('current-card');

currentCard.src = cardsDataBlue[8].cardFace

// decks main algritm
console.log(cardsDataGreen);
console.log(cardsDataBrown);
console.log(cardsDataBlue);

let extraEasyDeck
let mediumDeck
let arr = []

function randomGenerate(array, end, start = 0) {
  array = []
  while (array.length < end) {
    let el = Math.floor(Math.random() * 10);
    if (array.includes(el)) continue;
    else array.push(el)
  }
  return array
}

console.log(randomGenerate(arr, 5));
