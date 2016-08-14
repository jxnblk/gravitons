
const h = require('h0').default
const gravitons = require('..')()
const stats = require('./stats.json')
const logo = require('./logo')

const demoCss = `
*{box-sizing:border-box}
body{
font-family:-apple-system,BlinkMacSystemFont,sans-serif;
font-family: Menlo, monospace;
line-height:1.5;
margin:0;
color:#111;
}
`

const blue = '#05a'

const div = h('div')
const h1 = h('h1')({
  class: 'h3 mt4 mb1'
})
const h2 = h('h2')({
  class: 'h3 mt4 mb1'
})
const p = h('p')
const pre = h('pre')({
  style: {
    fontFamily: 'Menlo, monospace',
    lineHeight: 2,
    fontSize: 14,
    overflowX: 'scroll',
    paddingLeft: 16,
    marginBottom: 32,
    borderLeft: '4px solid rgba(0,0,0,.0625)'
  }
})
const ul = h('ul')
const li = h('li')
const link = h('a')({
  style: {
    color: blue
  }
})
const btn = h('a')({
  class: 'dib p1',
  style: {
    color: 'white',
    backgroundColor: 'blue',
    border: 0,
    WebkitAppearance: 'none',
  }
})
const blockquote = h('blockquote')({
  style: {
    maxWidth: '42em'
  },
  class: 'h2 m0 mt4 mb4'
})


const tree = div({
  class: 'p3'
})(
  h('style')(demoCss + gravitons.replace(/\n/g, '')),
  h('header')({})(
    div({
      class: 'mt4 mb4'
    })(
      logo()
    ),
    h1('Gravitons'),
    p('Virtually massless CSS layout microlibrary'),
    div(
      link({
        href: 'https://github.com/jxnblk/gravitons',
        class: 'mr2'
      })('GitHub'),
      link({
        href: 'https://npmjs.com/package/gravitons'
      })('npm')
    ),
  ),
  p({
    style: {
      maxWidth: '42em'
    },
    class: 'h2 mt4 mb4'
  })(
    'Gravitons is an extremely lightweight suite of CSS layout utilities based on modular scales and inspired by the ',
    link({
      href: 'http://en.wikipedia.org/wiki/Unix_philosophy'
    })('Unix Philosophy')
  ),
  pre('npm i -g gravitons'),
  pre('gravitons > base.css'),
  pre(`${stats.humanizedGzipSize} gzipped - ${stats.rules.total} rules - ${stats.selectors.total} selectors - ${stats.declarations.total} declarations`),
  h2('Features'),
  ul(
    li('Roughly .5KB gzipped'),
    li('Shorthand naming convention'),
    li('Quick to internalize'),
    li('No colors'),
    li('No media queries'),
    li('No monolithic component styles')
  ),
  h2('CSS'),
  pre(gravitons),
  blockquote('The graviton is a hypothetical elementary particle that mediates the force of gravitation in the framework of quantum field theory'),
  div({
    class: 'mt4 mb4'
  })(
    h2('Related'),
    link({
      href: 'http://tachyons.io',
      class: 'mr2'
    })('Tachyons'),
    link({ href: 'http://basscss.com' })('Basscss')
  ),
  h('footer')({
    class: 'mt4 mb4'
  })(
    link({
      href: 'https://github.com/jxnblk/gravitons',
      class: 'mr2'
    })('GitHub'),
    link({
      href: 'https://npmjs.com/package/gravitons',
      class: 'mr2'
    })('npm'),
    link({
      href: 'http://jxnblk.com'
    })('Made by Jxnblk')
  )
)

if (typeof app === 'undefined') {
  const app = document.createElement('div')
  document.body.appendChild(app)
  app.appendChild(tree)
} else {
  app.appendChild(tree)
}


