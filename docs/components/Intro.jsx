
var React = require('react');
var Container = require('./Container.jsx');

var Intro = React.createClass({

  render: function() {
    return (
      <section className="py4">
        <Container>
          <p className="h3">
            Gravitons is an extremely lightweight suite of CSS layout utilities based on modular scales and inspired by the <a href="http://en.wikipedia.org/wiki/Unix_philosophy" target="_blank">Unix Philosophy</a>.
          </p>
        </Container>
      </section>
    )
  }

});

module.exports = Intro;

