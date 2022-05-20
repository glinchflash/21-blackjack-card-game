//variable and array list
let icons = ["spades", "diamonds", "clubs", "hearts"];
let cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
let handPlayer = [];
let handPC = [];
let deck = [];
let playerCard = 0;
let playerCard2 = 0;
let playerCard3 = 0;
let playerCard4 = 0;
let playerCard5 = 0;
let playerCard6 = 0;
let playerIcon = "";
let playerIcon2 = "";
let playerIcon3 = "";
let playerIcon4 = "";
let playerIcon5 = "";
let playerIcon6 = "";
let pointsPlayer = 0;
let cardPc = 0;
let cardPc2 = 0;
let cardPc3 = 0;
let cardPc4 = 0;
let cardIcon = "";
let cardIcon2 = "";
let cardIcon3 = "";
let cardIcon4 = "";

let pointsPc = 0;
let clickcount = 0;
//prompt to aks players name ENABLE!
//let playerName = prompt("Please enter your name")
//document.getElementById('name').innerHTML = playerName;


//Making the deck
makeDeck();

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
        handPlayer.push(deck[Math.floor(Math.random() * deck.length - 1)]);
        document.getElementById('deckcount').innerHTML = String(deck.length);
    }
    playerCard = handPlayer[0].amount;
    playerIcon = handPlayer[0].icon;
    playerCard2 = handPlayer[1].amount;
    playerIcon2 = handPlayer[1].icon;
    //implement player cards
    document.getElementById('card1').src = "images/cards/" + playerCard + "_of_" + playerIcon + ".svg";
    document.getElementById('card1').style.visibility = "visible";
    document.getElementById('card2').src = "images/cards/" + playerCard2 + "_of_" + playerIcon2 + ".svg";
    document.getElementById('card2').style.visibility = "visible";

    for (let x = 0; x < 2; x++) {
        deck.pop();
        handPC.push(deck[Math.floor(Math.random() * deck.length - 1)]);
        document.getElementById('deckcount').innerHTML = String(deck.length);
    }
    cardPc = handPC[0].amount;
    cardPc2 = handPC[1].amount;
    cardIcon = handPC[0].icon;
    cardIcon2 = handPC[1].icon;
    //implement pc cards
    document.getElementById('cardPc1').src = "images/cards/" + cardPc + "_of_" + cardIcon + ".svg";
    document.getElementById('cardPc1').style.visibility = "visible";
    document.getElementById('cardPc2').src = "images/cards/" + cardPc2 + "_of_" + cardIcon2 + ".svg";
    document.getElementById('cardPc2').style.visibility = "visible";


    updatePoints();

}

//function to add up de points

function updatePoints() {

    //players jack/queen/knight and ACE value card 1
    if (playerCard === "jack" || playerCard === "queen" || playerCard === "king") {
        playerCard = 10;
    } else if (playerCard === "ace") {
        if (pointsPlayer <= 10) {
            playerCard = 11;
        } else if (pointsPlayer > 10) {
            playerCard = 1;
        }
    }
    //players jack/queen/knight and ACE value card 2
    if (playerCard2 === "jack" || playerCard2 === "queen" || playerCard2 === "king") {
        playerCard2 = 10;
    } else if (playerCard2 === "ace") {
        if (pointsPlayer <= 10) {
            playerCard2 = 11;
        } else if (pointsPlayer > 10) {
            playerCard2 = 1;
        }
    }

    // computers  jack/queen/knight and ACE value card 1
    if (cardPc === "jack" || cardPc === "queen" || cardPc === "king") {
        cardPc = 10;
    } else if (cardPc === "ace") {
        if (pointsPc <= 10) {
            cardPc = 11;
        } else if (pointsPc > 10) {
            cardPc = 1;
        }
    }

    // computers  jack/queen/knight and ACE value card 1
    if (cardPc2 === "jack" || cardPc2 === "queen" || cardPc2 === "king") {
        cardPc2 = 10;
    } else if (cardPc2 === "ace") {
        if (pointsPc <= 10) {
            cardPc2 = 11;
        } else if (pointsPc > 10) {
            cardPc2 = 1;
        }
    }
    if (pointsPlayer === 21) {
        alert("Blackjack!!! You win!!!");
        reset();
    }
    pointsPlayer += Number(playerCard);
    pointsPlayer += Number(playerCard2);
    pointsPc += Number(cardPc);
    pointsPc += Number(cardPc2);
    document.getElementById('pointsPlayer').innerHTML = pointsPlayer;
    document.getElementById('pointspc').innerHTML = pointsPc;
    declareWinner ();
}

// hit me up function
document.getElementById('hitme').addEventListener('click', hitMe);

function hitMe() {
    deck.pop();
    handPlayer.push(deck[Math.floor(Math.random() * deck.length - 1)]);
    document.getElementById('deckcount').innerHTML = String(deck.length);
    //updating the points after receiving new card
    if (clickcount === 0) {
        clickcount++;
        if (playerCard3 === "jack" || playerCard3 === "queen" || playerCard3 === "king") {
            playerCard3 = 10;
        } else if (playerCard3 === "ace") {
            if (pointsPlayer <= 10) {
                playerCard3 = 11;
            } else if (pointsPlayer > 10) {
                playerCard3 = 1;
            }
        }
        playerCard3 = handPlayer[2].amount;
        playerIcon3 = handPlayer[2].icon;
        pointsPlayer += Number(playerCard3);
        document.getElementById('card3').src = "images/cards/" + playerCard3 + "_of_" + playerIcon3 + ".svg";
        document.getElementById('card3').style.visibility = "visible";
    } else if (clickcount === 1) {
        clickcount++;
        if (playerCard4 === "jack" || playerCard4 === "queen" || playerCard4 === "king") {
            playerCard4 = 10;
        } else if (playerCard4 === "ace") {
            if (pointsPlayer <= 10) {
                playerCard4 = 11;
            } else if (pointsPlayer > 10) {
                playerCard4 = 1;
            }
        }
        playerCard4 = handPlayer[3].amount;
        playerIcon4 = handPlayer[3].icon;
        document.getElementById('card4').src = "images/cards/" + playerCard4 + "_of_" + playerIcon4 + ".svg";
        document.getElementById('card4').style.visibility = "visible";
        pointsPlayer += Number(playerCard4);
    } else if (clickcount === 2) {
        clickcount++;
        if (playerCard5 === "jack" || playerCard5 === "queen" || playerCard5 === "king") {
            playerCard5 = 10;
        } else if (playerCard5 === "ace") {
            if (pointsPlayer <= 10) {
                playerCard5 = 11;
            } else if (pointsPlayer > 10) {
                playerCard5 = 1;
            }
        }
        playerCard5 = handPlayer[4].amount;
        playerIcon5 = handPlayer[4].icon;
        document.getElementById('card5').src = "images/cards/" + playerCard5 + "_of_" + playerIcon5 + ".svg";
        document.getElementById('card5').style.visibility = "visible";
        playerCard6 = handPlayer[5].amount;
    } else if (clickcount === 3) {
        clickcount++;
        if (playerCard6 === "jack" || playerCard6 === "queen" || playerCard6 === "king") {
            playerCard6 = 10;
        } else if (playerCard6 === "ace") {
            if (pointsPlayer <= 10) {
                playerCard6 = 11;
            } else if (pointsPlayer > 10) {
                playerCard6 = 1;
            }
        }

        document.getElementById('card6').src = "images/cards/" + playerCard6 + "_of_" + playerIcon6 + ".svg";
        document.getElementById('card6').style.visibility = "visible";
        playerIcon6 = handPlayer[5].icon;
    }



    pointsPlayer += Number(playerCard5);
    pointsPlayer += Number(playerCard6);
    document.getElementById('pointsPlayer').innerHTML = pointsPlayer;
    winner()
}


//function for the "stay" button
document.getElementById('stay').addEventListener('click', stay);

function stay() {

    if (pointsPc < pointsPlayer && pointsPc < 17) {
        deck.pop();
        handPC.push(deck[Math.floor(Math.random() * deck.length - 1)]);
        document.getElementById('deckcount').innerHTML = String(deck.length);
        cardPc3 = handPC[2].amount;
        cardIcon3 = handPC[2].icon;
        document.getElementById('cardPc3').src = "images/cards/" + cardPc3 + "_of_" + cardIcon3 + ".svg";
        document.getElementById('cardPc3').style.visibility = "visible";
        console.log(cardPc3);
        if (cardPc3 === "jack" || cardPc3 === "queen" || cardPc3 === "king") {
            cardPc3 = 10;
        } else if (cardPc3 === "ace") {
            if (pointsPc <= 10) {
                cardPc3 = 11;
            } else if (pointsPc > 10) {
                cardPc3 = 1;
            }
        }

    }
    pointsPc += Number(cardPc3);
    document.getElementById('pointspc').innerHTML = pointsPc;
    if (pointsPc < pointsPlayer && pointsPc < 17) {
        deck.pop();
        handPC.push(deck[Math.floor(Math.random() * deck.length - 1)]);
        document.getElementById('deckcount').innerHTML = String(deck.length);
        cardPc4 = handPC[2].amount;
        console.log(cardPc4);
        if (cardPc4 === "jack" || cardPc4 === "queen" || cardPc4 === "king") {
            cardPc4 = 10;
        } else if (cardPc4 === "ace") {
            if (pointsPc <= 10) {
                cardPc4 = 11;
            } else if (pointsPc > 10) {
                cardPc4 = 1;
            }
        }
        document.getElementById('cardPc4').src = "images/cards/" + cardPc4 + "_of_" + cardIcon4 + ".svg";
        document.getElementById('cardPc4').style.visibility = "visible";
    }
    pointsPc += Number(cardPc4);
    console.log(pointsPc);
    document.getElementById('pointspc').innerHTML = pointsPc;
    winner()
}

//reset function

function reset() {
    let reset = prompt("Do you wanna play again? type yes to play again, type no to stop playing");
    if (reset !== "yes" && reset !== "no") {
        prompt("Please answer with 'yes' or 'no' ");
    } else if (reset === "yes") {
        location.reload();
    } else if (reset === "no") {
        alert("Goodbye, thanks for playing");
    }
}

//declare winner function at Dealing

function declareWinner() {
    if (pointsPlayer === 21){
        alert("Blackjack!!! You win!!");
        reset();
    }
    if (pointsPc === 21){
        alert("Dealer wins!! You lose.");
        reset();
    }
}

// declare winner after hit me

function winner() {
    if (pointsPc > pointsPlayer && pointsPc <= 21) {

        alert("Dealer wins! You lose.");
        reset();


    }
    else if (pointsPlayer === pointsPc){
        alert("Dealer wins! You lose.");
        reset();
    }
    if (pointsPc < pointsPlayer && pointsPc >= 17) {

        alert("You win!");
        reset();

    } else if (pointsPc > 21) {

        alert("You win!");
        reset();

    }
}
//starting the game , pushing start activates following functions: make the deck , shuffle it, deal 2 cards to player and pc

document.getElementById('start').addEventListener('click', shuffle);
document.getElementById('start').addEventListener('click', dealTheHand);
document.getElementById('start').addEventListener('click', disableStart);

function disableStart() {
    document.getElementById('start').setAttribute('disabled', 'disabled');
}
