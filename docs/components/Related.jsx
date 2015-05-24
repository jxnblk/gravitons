
var React = require('react');
var Container = require('./Container.jsx');

var Related = React.createClass({

  render: function() {
    return (
      <section id="related" className="tc py4">
        <Container>
          <h2 className="h3 caps">Related</h2>
          <a href="//tachyons.io" className="dib p1 m1">Tachyons</a>
          <a href="//basscss.com" className="dib p1 m1">Basscss</a>
        </Container>
      </section>
    )
  }

});

module.exports = Related;

