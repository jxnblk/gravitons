
var React = require('react');

var Blockquote = React.createClass({

  render: function() {
    var style = {
    };
    return (
      <blockquote style={style}
        className="h3 m0">
        {this.props.children}
      </blockquote>
    )
  }

});

module.exports = Blockquote;

