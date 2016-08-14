
const getInitials = str => str.split('-').map(s => s.charAt(0)).join('')

module.exports = getInitials

