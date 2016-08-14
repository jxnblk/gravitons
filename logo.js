
const h = require('h0').default

const logo = () => {
    const size = 256
    const width = 160
    // Angle
    const a = 36
    const a1 = 90 - a
    const a2 = 180 - a
    // Radii
    const r0 = size * 0.5625
    const r1 = size * 0.4375
    const r2 = size * .375
    const r3 = size * .3125
    const r4 = size * .25
    // Offsets
    const o0 = size/2 - r0
    const o1 = size/2 - r1
    const o2 = size/2 - r2
    const o3 = size/2 - r3
    const o4 = size/2 - r4
    // Diagonal line stroke width
    const w = 4
    const wy = Math.cos(90-a) * w
    const wx = Math.sin(90-a) * w
    // Calculate x coordinate with radius and angle
    const rx = (r, a) => r + r * Math.cos(Math.PI * a/180)
    // Calculate y coordinate with radius and angle
    const ry = (r, a) => r + r * Math.sin(Math.PI * a/180)

    const circle = [
      'M',
      o2 + rx(r2, -a),
      o2 + ry(r2, -a),
      'A', r2, r2, '0 1 0',
      o2 + rx(r2, a),
      o2 + ry(r2, a),
      'L',
      o3 + rx(r3, a),
      o3 + ry(r3, a),
      'A', r3, r3, '1 1 1',
      o3 + rx(r3, -a),
      o3 + ry(r3, -a),
      'z',
    ].join(' ')

    const diagonal = [
      'M',
      wx + o0 + rx(r0, a),
      -wy + o0 + ry(r0, a),
      'L',
      -wx + o0 + rx(r0, a),
      wy + o0 + ry(r0, a),
      'L',
      -wx + o4 + rx(r4, -a2),
      wy + o4 + ry(r4, -a2),
      'L',
      wx + o4 + rx(r4, -a2),
      -wy + o4 + ry(r4, -a2),
      'z',
      'M',
      wx + o1 + rx(r1, -a2),
      -wy + o1 + ry(r1, -a2),
      'L',
      -wx + o1 + rx(r1, -a2),
      wy + o1 + ry(r1, -a2),
      'L',
      -wx + o0 + rx(r0, -a2),
      wy + o0 + ry(r0, -a2),
      'L',
      wx + o0 + rx(r0, -a2),
      -wy + o0 + ry(r0, -a2),
      'z'
    ].join(' ')

  const css = `
    .Logo-particle-1,
    .Logo-particle-2 {
      animation-name: spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .Logo-particle-1 {
      transform-origin: 50% 50%;
      animation-duration: 1s;
    }
    .Logo-particle-2 {
      transform-origin: 50% 50%;
      animation-duration: 1.25s;
      animation-direction: reverse;
    }
    @keyframes spin {
      from { transform: rotate(0) }
      to   { transform: rotate(360deg) }
    }
  `

  const svg = (`
    <svg xmlns='http://www.w3.org/svg/2000'
      viewBox='0 0 ${size} ${size}'
      width='${width}'
      height='${width}'
      fill='currentcolor'>
      <g class='Logo-particle-1'>
        <rect width='${size}' height='${size}' fill='none' />
        <circle
          cx='${size / 2}'
          cy='3'
          r='3'
          opacity='0.5' />
      </g>
      <g class='Logo-particle-2'>
        <rect width='${size}' height='${size}' fill='none' />
        <circle
          cx='${size / 2}'
          cy='${size - 4}'
          r='4'
          opacity='0.5' />
      </g>
      <path d='${circle}' />
      <path d='${diagonal}' />
    </svg>
  `)

  const div = h('div')()

  div.innerHTML = svg

  return h('div')(
    h('style')(css),
    div
  )
}

module.exports = logo

