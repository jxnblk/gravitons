
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
    // Calculate x coordinate with radius and angle
    var rx = function(r, a) {
      return r + r * Math.cos(Math.PI * a/180);
    };
    // Calculate y coordinate with radius and angle
    var ry = function(r, a) {
      return r + r * Math.sin(Math.PI * a/180);
    };

    var circle = [
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
    ].join(' ');
    var diagonal = [
      'M',
      w + o0 + rx(r0, a),
      o0 + ry(r0, a),
      'L',
      o0 + rx(r0, a),
      w + o0 + ry(r0, a),
      'L',
      o4 + rx(r4, -a2),
      w + o4 + ry(r4, -a2),
      'L',
      w + o4 + rx(r4, -a2),
      o4 + ry(r4, -a2),
      'z',
      'M',
      w + o1 + rx(r1, -a2),
      o1 + ry(r1, -a2),
      'L',
      o1 + rx(r1, -a2),
      w + o1 + ry(r1, -a2),
      'L',
      o0 + rx(r0, -a2),
      w + o0 + ry(r0, -a2),
      'L',
      w + o0 + rx(r0, -a2),
      o0 + ry(r0, -a2),
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

