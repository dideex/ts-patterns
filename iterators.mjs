const dragons = [
  'cool dragon',
  'angry dragon',
  'nasty dragon'
]

const iterator = dragons[Symbol.iterator]()
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )

for(const dragon of dragons) 
  console.log( dragon )