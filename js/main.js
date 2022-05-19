//variable and array list

const types = ["spades", "diamonds", "clubs", "hearts"];
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = []

//Making the deck
makeDeck()
function makeDeck() {
    for (let i = 0; i < cards.length; i++) {
        for (let x = 0; x < types.length; x++) {
            let card = {Value: cards[x], Suit: types[i]};
            deck.push(card);
        }
    }
    return deck;

}

