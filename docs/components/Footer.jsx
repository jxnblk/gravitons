
var React = require('react');
var Container = require('./Container.jsx');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="py4">
        <Container>
          <div className="x">
            <a href="//github.com/jxnblk/gravitons">GitHub</a>
            <div className="xa" />
            <a href="//jxnblk.com">Made by Jxnblk</a>
          </div>
        </Container>
      </footer>
    )
  }

});

module.exports = Footer;

