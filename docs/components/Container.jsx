
var React = require('react');

var Container = React.createClass({

  render: function() {
    var style = {
      maxWidth: '56em',
      margin: '0 auto'
    };
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Container;

