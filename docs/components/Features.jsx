
var React = require('react');
var Container = require('./Container.jsx');

var Features = React.createClass({

  render: function() {
    return (
      <section id="features" className="py4">
        <Container>
          <h2 class="h3 caps">Features</h2>
          <ul className="c2">
            <li>Less than 1KB</li>
            <li>Shorthand naming convention</li>
            <li>Quick to internalize</li>
            <li>No colors</li>
            <li>No media queries</li>
            <li>No monolithic components</li>
          </ul>
        </Container>
      </section>
    )
  }

});

module.exports = Features;

