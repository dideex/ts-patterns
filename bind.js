const bind = (fn, ctx) => {
  const callField = Symbol()
  if (typeof ctx === 'object') {
    ctx[callField] = fn
  } else {
    return fn
  }
  return (...args) => ctx[callField](...args)
}
