/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Club, Diamond, Heart, Spade
}

export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suit, CardNumber];

function setupDeck(): Card[] {
  let cards: Card[] = []
  for( let s = 0; s < Object.keys(Suit).length; s +=2 ) {
    for(let n = 0; s < Object.keys(CardNumber).length; n += 2){
      cards.push([s/2, n/2])
    }
  }
  return cards
}

export class Dealer {
  cards: Card[] = [];
  constructor() {
    this.cards = setupDeck()
  }
  readCard(card: Card): string {
    const [suit, cardNumber] = card
    return `Your card is ${CardNumber[cardNumber]} of ${Suit[suit]}`
  }
  dealHand(numCard: number): Card[] {
    if(numCard > this.getLength()) throw new Error('Not')
    if(numCard < 0) throw new Error('Not a positive nubmer')
     return this.cards.splice(this.getLength() - numCard, numCard)
  }
  getLength(): number {
    return this.cards.length;
  }
}