
var React = require('react');

var Logo = React.createClass({

  render: function() {
    var width = 128;
    var r1 = 48;
    var r2 = 40;
    var o1 = width/2 - r1;
    var o2 = width/2 - r2;

    var d = [
      'M',
      o1 + r1 + r1*Math.cos(Math.PI*-45/180),
      o1 + r1 + r1*Math.sin(Math.PI*-45/180),
      'A', r1, r1, '0 1 0',
      o1 + r1 + r1*Math.cos(Math.PI*45/180),
      o1 + r1 + r1*Math.sin(Math.PI*45/180),
      'L',
      o2 + r2 + r2*Math.cos(Math.PI*45/180),
      o2 + r2 + r2*Math.sin(Math.PI*45/180),
      'A', r2, r2, '1 1 1',
      o2 + r2 + r2*Math.cos(Math.PI*-45/180),
      o2 + r2 + r2*Math.sin(Math.PI*-45/180),
    ].join(' ');
    
    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={'0 0 ' + width + ' ' + width}
        width={width}
        height={width}
        fill="currentcolor">
        <rect width="128"
          height="128"
          fill="none" stroke="red" />
        <path d={d} />
      </svg>
    )
  }

});

module.exports = Logo;

