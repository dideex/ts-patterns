function fibonacci( ) {
  let lastLast = 1;
  let last = 0;
  return {
    next() {
      let val = last + lastLast;
      if(val > 10) {
        return {done: true}
      }
      lastLast = last;
      last = val;
      return {value: val, done: false}
    }
  }
}

let it = fibonacci()
for(let p = it.next(); !p.done; p = it.next()) {
  console.log(p.value)
}