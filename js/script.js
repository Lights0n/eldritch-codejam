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

const nextCard = document.getElementById('next-card')

const createBtn = document.getElementById('create-deck')
let chosenAncient;
let myDifficulty
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

// styles for chosen difficulty
function activeDifficulty(chosen) {
  for (let label of labels) {
    label.classList.remove('active')

    if (label.htmlFor === chosen.id) {

      label.classList.add('active')
      myDifficulty = chosen.id

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
// console.log(cardsDataGreen);
// console.log(cardsDataBrown);
// console.log(cardsDataBlue);

let extraEasyDeck
let mediumDeck

function randomGenerate(array, size, max = 5, start = 0) {
  array = []
  while (array.length < size) {
    let el = Math.floor(Math.random() * max);
    if (array.includes(el)) continue;
    else array.push(el)
  }
  return array
}
// cardsDataGreen
// cardsDataBrown
// cardsDataBlue
// createBtn

// количество карт
// greenVal
// brownVal
// blueVal


function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // пока остались жоементы для перемешивания
  while (currentIndex != 0) {

    // берем оставшийся элемент
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // и меняем его с нужным элементом
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// сосставляем колоды по индексам
function createColorDeck(cardsDataColor, cardsDataIdexes, colorArray) {
  cardsDataColor.map((el, ind) => {
    if (cardsDataIdexes.includes(ind)) {
      colorArray.push(el)
    }
  })
  return colorArray
}

let thirdDeckFull = []
let secondDeckFull = []
createBtn.addEventListener('click', () => {
  let arr1 = []
  let arr2 = []
  let arr3 = []

  let allGreen = []
  let allBrown = []
  let allBlue = []

  let greenTwo = []
  let brownTwo = []
  let blueTwo = []
  secondDeckFull = []

  let greenThree = []
  let brownThree = []
  let blueThree = []

  thirdDeckFull = []

  if (myDifficulty && chosenAncient) {
    // console.log('we`re done');
    // todo main algoritm
    //      индексы карт для игры  по цветам     
    let allGreenForGame = randomGenerate(allGreen, +fSGreen.innerHTML + +sSGreen.innerHTML + +thSGreen.innerHTML, cardsDataGreen.length)
    let allBrownForGame = randomGenerate(allBrown, +fSBrown.innerHTML + +sSBrown.innerHTML + +thSBrown.innerHTML, cardsDataBrown.length)
    let allBlueForGame = randomGenerate(allBlue, +fSblue.innerHTML + +sSblue.innerHTML + +thSblue.innerHTML, cardsDataBlue.length)
    shuffle(allGreenForGame)
    shuffle(allBrownForGame)
    shuffle(allBlueForGame)


    // бурем себе нужное количество для 3 стадии с начала цветной колоды и режем колоду дальше
    let greenThreeIndexes = allGreenForGame.slice(0, +thSGreen.innerHTML)
    // режем колоду
    allGreenForGame.splice(0, +thSGreen.innerHTML)

    let BrownThreeIndexes = allBrownForGame.slice(0, thSBrown.innerHTML)
    allBrownForGame.splice(0, +thSBrown.innerHTML)

    let BlueThreeIndexes = allBlueForGame.slice(0, thSblue.innerHTML)
    allBlueForGame.splice(0, +thSblue.innerHTML)


    // составляем массивы карт по индексам что сверху
    greenThree = createColorDeck(cardsDataGreen, greenThreeIndexes, greenThree)
    brownThree = createColorDeck(cardsDataBrown, BrownThreeIndexes, brownThree)
    blueThree = createColorDeck(cardsDataBlue, BlueThreeIndexes, blueThree)

    // бурем себе нужное количество для 2 стадии с начала цветной колоды и режем колоду дальше
    let greenTwoIndexes = allGreenForGame.slice(0, +sSGreen.innerHTML)
    // режем колоду
    allGreenForGame.splice(0, +sSGreen.innerHTML)

    let BrownTwoIndexes = allBrownForGame.slice(0, sSBrown.innerHTML)
    allBrownForGame.splice(0, +sSBrown.innerHTML)

    let BlueTwoIndexes = allBlueForGame.slice(0, sSblue.innerHTML)
    allBlueForGame.splice(0, +sSblue.innerHTML)

    // составляем массивы карт по индексам что сверху
    greenTwo = createColorDeck(cardsDataGreen, greenTwoIndexes, greenTwo)
    brownTwo = createColorDeck(cardsDataBrown, BrownTwoIndexes, brownTwo)
    blueTwo = createColorDeck(cardsDataBlue, BlueTwoIndexes, blueTwo)



    // console.log(greenTwo);
    // console.log(brownTwo);
    // console.log(blueTwo);

    thirdDeckFull = thirdDeckFull.concat(greenThree, brownThree, blueThree)
    shuffle(thirdDeckFull)

    secondDeckFull = secondDeckFull.concat(greenTwo, brownTwo, blueTwo)
    shuffle(secondDeckFull)
    console.log(thirdDeckFull);
    console.log(secondDeckFull);
  }
  else if (!chosenAncient) {
    alert('выберите Древнего!')
  }
  else if (!myDifficulty) {
    alert('выберите сложность!')
  }
})
function showNextCard(deck3, deck2, deck1 = []) {

  // sSGreen
  // sSblue
  // sSBrown
  if (deck1.length == 0 && deck2.length > 0) {
    currentCard.src = deck2[deck2.length - 1].cardFace
    if (deck2[deck2.length - 1].color == 'green') {
      console.log('green');
      sSGreen.textContent = +sSGreen.innerHTML - 1
    }
    else if (deck2[deck2.length - 1].color == 'brown') {
      console.log('brown');
      sSBrown.textContent = +sSBrown.innerHTML - 1
    }
    if (deck2[deck2.length - 1].color == 'blue') {
      console.log('blue');
      sSblue.textContent = +sSblue.innerHTML - 1
    }
    deck2.pop()
    console.log(deck2);
  }
  else if (deck3.length > 0) {
    currentCard.src = deck3[deck3.length - 1].cardFace
    if (deck3[deck3.length - 1].color == 'green') {
      console.log('green');
      thSGreen.textContent = +thSGreen.innerHTML - 1
    }
    else if (deck3[deck3.length - 1].color == 'brown') {
      console.log('brown');
      thSBrown.textContent = +thSBrown.innerHTML - 1
    }
    if (deck3[deck3.length - 1].color == 'blue') {
      console.log('blue');
      thSBlue.textContent = +thSBlue.innerHTML - 1
    }
    deck3.pop()
    console.log(deck3);
    console.log(deck2);
  }
  // todo 1 stage
  // else if (deck.length == 0 && deck2.length > 0) {
  //   // alert('конец игры')
  // }
  else {
    console.log('конец игры');
  }


}

nextCard.addEventListener('click', () => {

  showNextCard(thirdDeckFull, secondDeckFull)
})
