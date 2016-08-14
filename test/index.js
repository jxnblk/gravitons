
import test from 'ava'
import gravitons from '..'

let css

test('returns a string', t => {
  css = gravitons()
  t.is(typeof css, 'string')
})

test('includes typography rules', t => {
  t.regex(css, /\.h1/)
  t.regex(css, /\.h2/)
  t.regex(css, /\.h3/)
  t.regex(css, /\.h4/)
  t.regex(css, /\.h5/)
  t.regex(css, /\.h6/)
})

test('includes margin rules', t => {
  t.regex(css, /\.m0/)
  t.regex(css, /\.m1/)
  t.regex(css, /\.m2/)
  t.regex(css, /\.m3/)
  t.regex(css, /\.m4/)
})

test('includes padding rules', t => {
  t.regex(css, /\.p0/)
  t.regex(css, /\.p1/)
  t.regex(css, /\.p2/)
  t.regex(css, /\.p3/)
  t.regex(css, /\.p4/)
})

test('includes display rules', t => {
  t.regex(css, /\.db/)
  t.regex(css, /\.dib/)
  t.regex(css, /\.di/)
  t.regex(css, /\.dt/)
  t.regex(css, /\.dtr/)
  t.regex(css, /\.dtc/)
  t.regex(css, /\.df/)
  t.regex(css, /\.dif/)
})

test('includes float rules', t => {
  t.regex(css, /\.fl/)
  t.regex(css, /\.fr/)
})

test('includes clearfix rules', t => {
  t.regex(css, /\.oh/)
  t.regex(css, /\.cf/)
})

test('includes width rules', t => {
  t.regex(css, /\.x0/)
  t.regex(css, /\.x1/)
  t.regex(css, /\.x2/)
  t.regex(css, /\.x3/)
  t.regex(css, /\.x4/)
  t.regex(css, /\.x5/)
  t.regex(css, /\.x6/)
  t.regex(css, /\.x7/)
  t.regex(css, /\.x8/)
  t.regex(css, /\.x9/)
  t.regex(css, /\.x10/)
  t.regex(css, /\.x11/)
  t.regex(css, /\.x12/)
})

test('converts numbers to pixel values', t => {
  t.regex(css, /:0}/)
  t.regex(css, /32px/)
  t.regex(css, /64px/)
})

test('converts fractions to percentages', t => {
  t.regex(css, /25%}/)
  t.regex(css, /50%}/)
  t.regex(css, /100%}/)
})

