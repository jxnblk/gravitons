
var React = require('react');
var Container = require('./Container.jsx');

var Related = React.createClass({

  render: function() {
    return (
      <section id="related" className="tc py4">
        <Container>
          <h2 className="h3 caps">Related</h2>
          <a href="//tachyons.io">Tachyons</a> | <a href="//basscss.com">Basscss</a>
        </Container>
      </section>
    )
  }

});

module.exports = Related;

