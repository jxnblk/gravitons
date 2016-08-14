
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
      48,
      32,
      24,
      20,
      16,
      14,
      12
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
    sel: 'x',
    prop: 'width',
    val: Array.from({ length: 13 }).map((n, i) => i / 12)
  }
]

module.exports = styles

