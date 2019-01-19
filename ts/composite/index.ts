import { CardDeck } from './card-deck'
import { Card } from './card'

const cardDeck = new CardDeck()

cardDeck.add(new Card('Card 1', 34, 56))
cardDeck.add(new Card('Card 2', 34, 56))

const secondDeck = new CardDeck()
secondDeck.add(new Card('Card 3', 34, 56))
secondDeck.add(new Card('Card 4', 34, 56))

cardDeck.add(secondDeck)
cardDeck.add(new Card('Card 5', 5, 32))

console.log(cardDeck.display())