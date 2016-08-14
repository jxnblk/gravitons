
const kebab = str => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())

module.exports = kebab

