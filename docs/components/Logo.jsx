
var React = require('react');

var Logo = React.createClass({

  render: function() {
    var width = 128;
    // Angle
    var a = 36;
    var a2 = 180 - a;
    // Radii
    var r0 = width * 0.5625;
    var r1 = width * 0.4375;
    var r2 = width * .375;
    var r3 = width * .3125;
    var r4 = width * .25;
    // Offsets
    var o0 = width/2 - r0;
    var o1 = width/2 - r1;
    var o2 = width/2 - r2;
    var o3 = width/2 - r3;
    var o4 = width/2 - r4;
    // Diagonal line stroke width
    var w = 2;

    var circle = [
      'M',
      o2 + r2 + r2 * Math.cos(Math.PI * -a/180),
      o2 + r2 + r2 * Math.sin(Math.PI * -a/180),
      'A', r2, r2, '0 1 0',
      o2 + r2 + r2 * Math.cos(Math.PI * a/180),
      o2 + r2 + r2 * Math.sin(Math.PI * a/180),
      'L',
      o3 + r3 + r3 * Math.cos(Math.PI * a/180),
      o3 + r3 + r3 * Math.sin(Math.PI * a/180),
      'A', r3, r3, '1 1 1',
      o3 + r3 + r3 * Math.cos(Math.PI * -a/180),
      o3 + r3 + r3 * Math.sin(Math.PI * -a/180),
      'z',
    ].join(' ');
    var diagonal = [
      'M',
      w + o0 + r0 + r0 * Math.cos(Math.PI * a/180),
      o0 + r0 + r0 * Math.sin(Math.PI * a/180),
      'L',
      o0 + r0 + r0 * Math.cos(Math.PI * a/180),
      w + o0 + r0 + r0 * Math.sin(Math.PI * a/180),
      'L',
      o4 + r4 + r4 * Math.cos(Math.PI * -a2/180),
      w + o4 + r4 + r4 * Math.sin(Math.PI * -a2/180),
      'L',
      w + o4 + r4 + r4 * Math.cos(Math.PI * -a2/180),
      o4 + r4 + r4 * Math.sin(Math.PI * -a2/180),
      'z',
      'M',
      w + o1 + r1 + r1 * Math.cos(Math.PI * -a2/180),
      o1 + r1 + r1 * Math.sin(Math.PI * -a2/180),
      'L',
      o1 + r1 + r1 * Math.cos(Math.PI * -a2/180),
      w + o1 + r1 + r1 * Math.sin(Math.PI * -a2/180),
      'L',
      o0 + r0 + r0 * Math.cos(Math.PI * -a2/180),
      w + o0 + r0 + r0 * Math.sin(Math.PI * -a2/180),
      'L',
      w + o0 + r0 + r0 * Math.cos(Math.PI * -a2/180),
      o0 + r0 + r0 * Math.sin(Math.PI * -a2/180),
      'z'

    ].join(' ');
    
    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={'0 0 ' + width + ' ' + width}
        width={width}
        height={width}
        fill="currentcolor">
        <path d={circle} />
        <path d={diagonal} />
      </svg>
    )
  }

});

module.exports = Logo;

