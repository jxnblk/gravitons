/** Gravitons */

const kebab = str => str.replace(/([A-Z])/g, g => '-' + g.toLowerCase())

const numberToPixel = val => {
  if (typeof val !== 'number' || val === 0) return val
  if (val > 0 && val <= 1) {
    return `${val * 100}%`
  }
  return val + 'px'
}

const getInitials = str => str.split('-').map(s => s.charAt(0)).join('')

const isArr = n => Array.isArray(n)
const isStr = n => typeof n === 'string'
const isObj = n => typeof n === 'object' && n !== null

const flattenArray = (a = [], b) => {
  if (Array.isArray(b)) return [...a, ...b]
  return [...a, b]
}

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

const scale = [
  0,
  8,
  16,
  32,
  64
]

const styles = [
  {
    sel: 'h',
    prop: 'font-size',
    val: [
      '3rem',
      '2rem',
      '1.5rem',
      '1.25rem',
      '1rem',
      '.875rem',
      '.75rem'
    ]
  },
  {
    prop: [
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left'
    ],
    val: scale
  },
  {
    sel: 'd',
    prop: 'display',
    val: [
      'block',
      'inline-block',
      'inline',
      'table',
      'table-row',
      'table-cell',
      'flex',
      'inline-flex'
    ]
  },
  {
    sel: 'f',
    prop: 'float',
    val: [
      'left',
      'right'
    ]
  },
  {
    sel: 'oh',
    prop: 'overflow',
    val: 'hidden'
  },
  {
    sel: 'cf:after',
    decs: {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  },
  {
    sel: 'c',
    prop: 'width',
    val: Array.from({ length: 13 }).map((n, i) => i / 12)
  }
]

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

  return rules.join('\n')
}

module.exports = createStylesheet

