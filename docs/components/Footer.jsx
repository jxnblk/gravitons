
var React = require('react');
var Container = require('./Container.jsx');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="py4">
        <Container>
          <div className="cf">
            <div className="fl">
              <a href="//github.com/jxnblk/gravitons">GitHub</a>
            </div>
            <div className="fr">
              <a href="//jxnblk.com">Made by Jxnblk</a>
            </div>
          </div>
        </Container>
      </footer>
    )
  }

});

module.exports = Footer;

