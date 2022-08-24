import ancientsData from '../data/ancients2.js'
console.log(ancientsData);
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

const AncientName = document.querySelector('.main__ancient-name');
let chosenAncient;
let difficulty;

function cardTracker() {
  if (chosenAncient == 'azathoth') {
  }
  else if (chosenAncient == 'cthulhu') {
  }
  else if (chosenAncient == 'iogSothoth') {
  }
  else if (chosenAncient == 'shubNiggurath') {
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
      thSblue.textContent = el.thirdStage.blueCards
      thSBrown.textContent = el.thirdStage.brownCards
    }
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