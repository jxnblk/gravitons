
var React = require('react');
var Head = require('./Head.jsx');
var Header = require('./Header.jsx');
var Intro = require('./Intro.jsx');
var Stats = require('./Stats.jsx');
var Features = require('./Features.jsx');
var Styles = require('./Styles.jsx');
var Definition = require('./Definition.jsx');
var Related = require('./Related.jsx');
var Footer = require('./Footer.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <html>
        <Head {...this.props} />
        <body className="p3">
          <Header {...this.props} />
          <Intro {...this.props} />
          <Stats {...this.props} />
          <Features {...this.props} />
          <Styles {...this.props} />
          <Definition {...this.props} />
          <Related />
          <Footer />
        </body>
      </html>
    )
  }

});

module.exports = Root;

