const times10 = n => {console.log('no cached', n);return n * 10}

const memoize = fn => {
  const cache = {}
  return n => (n in cache ? cache[n] : (cache[n] = fn(n)))
};

const memoClousreTimes10 = memoize(times10)

console.log(
  memoClousreTimes10(10), 
  memoClousreTimes10(10),
  memoClousreTimes10(9),
  memoClousreTimes10(9),
  memoClousreTimes10(9),
  )
