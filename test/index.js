
import test from 'ava'
import gravitons from '../src'

test('returns a string', t => {
  const css = gravitons()
  console.log(css)
  t.is(typeof css, 'string')
})

