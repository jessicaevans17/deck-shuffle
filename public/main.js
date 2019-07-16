const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

shuffleCards = () => {
  let newSuit = suits[Math.floor(Math.random() * suits.length)]
  console.log(newSuit)
  let newValue = values [Math.floor(Math.random() * values.length)]
  console.log(newValue)
  let addNewSuit = document.createElement ("p")
  addNewSuit.textContent = newSuit
  document.querySelector(".suits").appendChild(addNewSuit)
  let addNewValue = document.createElement("p")
  addNewValue.textContent = newValue
  document.querySelector(".values").appendChild(addNewValue)
}
document
  .querySelector(".shuffle")
  .addEventListener("click", shuffleCards)

document
  .addEventListener("DOMContentLoaded", main)