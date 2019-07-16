const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
const deck = new Array()
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


let arrayShuffle = function (arr) {
  let newPos
  let tempPos

  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1))
    tempPos = arr[i]
    arr[i] = arr[newPos]
    arr[newPos] = tempPos
  }
  return arr
}

const shuffleCards = () =>{
  let suitShuffle = arrayShuffle (suits)
  for (let i=0; i < suitShuffle.length; i++) {
    const createSuit= document.createElement ("p")
    createSuit.textContent = suitShuffle[i]
    document.querySelector(".suits").appendChild(createSuit)}
  let valueShuffle = arrayShuffle (values)
  for (let i=0; i < valueShuffle.length; i++){
    const createValue = document.createElement ("p")
    createValue.textContent = valueShuffle[i]
    document.querySelector(".values").appendChild(createValue)}
  }
  
  


document
  .querySelector(".shuffle")
  .addEventListener("click", shuffleCards)

document
  .addEventListener("DOMContentLoaded", main)