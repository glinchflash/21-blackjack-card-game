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

//dealing the first 2 cards to player and pc (removing them from deck)
function dealTheHand() {
    for (i = 0; i < 2; i++) {
        card = deck.pop();
        handPlayer.push(deck[Math.floor(Math.random() * deck.length - 1)])

    }
    for (x = 0; x < 2; x++) {
        card = deck.pop();
        handPC.push(deck[Math.floor(Math.random() * deck.length - 1)])
    }
    // updatepoints(); //Dont forget to enable!!!!!!!!!!!!!!!!!
    console.log(handPlayer);
    console.log(handPC);
    console.log(deck.length);
}

//adding the 2 cards to the hand of player and pc
function fillhand() {
    handPlayer.push(card);
    handPC.push(card);
    //document.getElementById('handplayer').innerHTML = handPlayer;
    //document.getElementById('handpc').innerHTML = handPC;
}

//starting the game , pushing start activates following functions: make the deck , shuffle it, deal 2 cards to player and pc
//document.getElementById('start').addEventListener('click', makeDeck);
document.getElementById('start').addEventListener('click', shuffle);
document.getElementById('start').addEventListener('click', dealTheHand);