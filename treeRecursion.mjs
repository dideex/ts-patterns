const categoris = [
  {id: 'animal', parent: null},
  {id: 'mammals', parent: 'animal'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
]

const makeTree = (cat, parent) => {
  let node = {}
  cat
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(cat, c.id))
  return Object.keys(node).length? node: null
}

console.log(JSON.stringify(makeTree(categoris, null), null, 2))