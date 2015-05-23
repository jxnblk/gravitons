
var React = require('react');
var Logo = require('./Logo.jsx');
var Button = require('./Button.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <header className="tc py4">
        <Logo />
        <h1 className="caps caps3">{this.props.title}</h1>
        <p className="h3">{this.props.description}</p>
        <Button {...this.props}
          href="//github.com/jxnblk/gravitons">
          Github
        </Button>
      </header>
    )
  }

});

module.exports = Header;

