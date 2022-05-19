//variable and array list
const icons = ["spades", "diamonds", "clubs", "hearts"];
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let handPlayer = []
let handPC = []
let deck = []
let playerCard = 0;
let playerCard2 = 0
let pointsPlayer = 0;
let cardPc = 0;
let cardPc2 = 0
let pointsPc = 0;

//prompt to aks players name ENABLE!
//let playerName = prompt("Please enter your name")
//document.getElementById('name').innerHTML = playerName;

//prompt to ask if player wants to play again
/*let reset = prompt("Do you wanna play again? type yes to play again, type no to stop playing")
if (reset !== "yes" && reset !== "no") {
    prompt("Please answer with 'yes' or 'no' ")
} else if (reset === "yes") {
    location.reload();
} else if (reset === "no") {
    alert("Goodbye, thanks for playing");
}*/

//Making the deck
makeDeck()

function makeDeck() {
    for (let i = 0; i < icons.length; i++) {
        for (let x = 0; x < cards.length; x++) {
            let card = {"amount": cards[x], "icon": icons[i]};
            deck.push(card);
        }
    }
    return deck;
}

// shuffle the deck (500turns)
//shuffle();
function shuffle() {

    for (let i = deck.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * i);
        let result = deck[i];
        deck[i] = deck[x];
        deck[x] = result;


    }
}

//dealing the first 2 cards to player and pc (removing them from deck)
function dealTheHand() {
    for (let i = 0; i < 2; i++) {
        deck.pop();
        handPlayer.push(deck[Math.floor(Math.random() * deck.length - 1)])
        document.getElementById('deckcount').innerHTML = String(deck.length)
    }
    playerCard = handPlayer[0].amount;
    playerCard2 = handPlayer[1].amount;
    console.log(playerCard);
    console.log(playerCard2);

    for (let x = 0; x < 2; x++) {
        deck.pop();
        handPC.push(deck[Math.floor(Math.random() * deck.length - 1)])
        document.getElementById('deckcount').innerHTML = String(deck.length)
    }
    cardPc = handPC[0].amount;
    cardPc2 = handPC[1].amount;
    console.log(cardPc);
    console.log(cardPc2);

    updatePoints(); //Dont forget to enable!!!!!!!!!!!!!!!!!
    console.log(handPlayer);
    console.log(handPC);
    console.log(pointsPlayer);
    console.log(pointsPc);
}

//function to add up de points

function updatePoints() {

    //players jack/queen/knight and ACE value card 1
    if (playerCard === "J" || playerCard === "Q" || playerCard === "K") {
        playerCard = 10;
    } else if (playerCard === "A") {
        if (pointsPlayer <= 10) {
            playerCard = 11;
        } else if (pointsPlayer > 10) {
            playerCard = 1;
        }
    }
    //players jack/queen/knight and ACE value card 2
    if (playerCard2 === "J" || playerCard2 === "Q" || playerCard2 === "K") {
        playerCard2 = 10;
    } else if (playerCard2 === "A") {
        if (pointsPlayer <= 10) {
            playerCard2 = 11;
        } else if (pointsPlayer > 10) {
            playerCard2 = 1;
        }
    }

    // computers  jack/queen/knight and ACE value card 1
    if (cardPc === "J" || cardPc === "Q" || cardPc === "K") {
        cardPc = 10;
    } else if (cardPc === "A") {
        if (pointsPc <= 10) {
            cardPc = 11;
        } else if (pointsPc > 10) {
            cardPc = 1;
        }
    }

    // computers  jack/queen/knight and ACE value card 1
    if (cardPc2 === "J" || cardPc2 === "Q" || cardPc2 === "K") {
        cardPc2 = 10;
    } else if (cardPc2 === "A") {
        if (pointsPc <= 10) {
            cardPc2 = 11;
        } else if (pointsPc > 10) {
            cardPc2 = 1;
        }
    }
    pointsPlayer = Number(playerCard) + Number(playerCard2);
    pointsPc = Number(cardPc) + Number(cardPc2);
    document.getElementById('pointsPlayer').innerHTML = pointsPlayer;
    document.getElementById('pointspc').innerHTML = pointsPc;
}


//starting the game , pushing start activates following functions: make the deck , shuffle it, deal 2 cards to player and pc

document.getElementById('start').addEventListener('click', shuffle);
document.getElementById('start').addEventListener('click', dealTheHand);
document.getElementById('start').addEventListener('click', disableStart);

function disableStart() {
    document.getElementById('start').setAttribute('disabled', 'disabled');
}