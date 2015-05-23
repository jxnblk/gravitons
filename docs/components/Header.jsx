
var React = require('react');
var Logo = require('./Logo.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <header className="tc py2">
        <Logo />
        <h1 className="">{this.props.title}</h1>
        <p className="h3">{this.props.description}</p>
      </header>
    )
  }

});

module.exports = Header;

