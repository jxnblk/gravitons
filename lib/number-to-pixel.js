
const numberToPixel = val => {
  if (typeof val !== 'number' || val === 0) return val
  if (val > 0 && val <= 1) {
    return `${val * 100}%`
  }
  return val + 'px'
}

module.exports = numberToPixel

