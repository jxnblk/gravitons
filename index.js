
const kebab = require('./lib/kebab')
const numberToPixel = require('./lib/number-to-pixel')
const getInitials = require('./lib/get-initials')
const flattenArray = require('./lib/flatten-array')
const styles = require('./lib/styles')

const isArr = n => Array.isArray(n)
const isStr = n => typeof n === 'string'
const isObj = n => typeof n === 'object' && n !== null

const createRule = sel => prop => val => (
  `.${sel}{${prop}:${numberToPixel(val)}}`
)

const createComplexRule = sel => style => {
  const decs = Object.keys(style).map(key => (
    `${kebab(key)}:${style[key]}`
  ))
  return `.${sel}{${decs.join(';')}}`
}

const getScaledSelector = sel => val => i => {
  if (typeof val === 'number') {
    return sel + i
  }
  return sel + getInitials(val)
}

const createScaledRules = values => sel => prop => (
  values.map((val, i) => (
    createRule(getScaledSelector(sel)(val)(i))(prop)(val)
  ))
)

const createDimensionalRules = props => values => (
  props.map(prop => (
    createScaledRules(values)(getInitials(prop))(prop)
  )).reduce(flattenArray)
)

const createStylesheet = (options = {}) => {
  const rules = styles.map(style => {
    const { sel, prop, val, decs } = style
    if (isArr(prop) && isArr(val)) {
      return createDimensionalRules(prop)(val)
    }
    if (isStr(prop) && isArr(val)) {
      return createScaledRules(val)(sel)(prop)
    }
    if (isObj(decs)) {
      return createComplexRule(sel)(decs)
    }

    return createRule(sel)(prop)(val)
  }).reduce(flattenArray)

  const css = `/*! gravitons */\n` + rules.join('\n') + '\n\n'

  return css
}

module.exports = createStylesheet

