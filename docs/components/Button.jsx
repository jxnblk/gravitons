
var React = require('react');

var Button = React.createClass({

  render: function() {
    var style = {
      display: 'inline-block',
      fontWeight: '700',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      lineHeight: '3',
      padding: '0 1rem',
      color: '#fff',
      //backgroundColor: this.props.colors.blue,
      borderRadius: '3px'
    };
    return (
      <a {...this.props}
        style={style}
        className="bg-blue">
        {this.props.children}
      </a>
    )
  }

});

module.exports = Button;

