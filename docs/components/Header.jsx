
var React = require('react');
var Logo = require('./Logo.jsx');
var Button = require('./Button.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <header className="tc py4">
        <Logo />
        <h1 className="m0 caps caps3">{this.props.title}</h1>
        <p className="h3 m0">{this.props.description}</p>
        <div className="m3">
          <Button {...this.props}
            href="//github.com/jxnblk/gravitons">
            Github
          </Button>
        </div>
      </header>
    )
  }

});

module.exports = Header;

