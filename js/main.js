//variable and array list

const types = ["spades", "diamonds", "clubs", "hearts"];
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let handPlayer = []
let handPC = []
let deck = []
console.log(cards.length);

//prompt to aks players name ENABLE!
//let playerName = prompt("Please enter your name")
//document.getElementById('name').innerHTML = playerName;


//Making the deck
makeDeck()

function makeDeck() {
    for (i = 0; i < types.length; i++) {
        for (x = 0; x < cards.length; x++) {
            let card = {card: cards[x], type: types[i]};
            deck.push(card);
        }
    }
    return deck;
}

// shuffle the deck (500turns)
//shuffle();
function shuffle() {

    for (i = deck.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * i);
        let result = deck[i];
        deck[i] = deck[x];
        deck[x] = result;

    }
}
