
var React = require('react');
var Container = require('./Container.jsx');

var Features = React.createClass({

  render: function() {
    return (
      <section id="features" className="tc py4">
        <Container>
          <h2 className="h3 caps">Features</h2>
          <ul className="h3 p0 cols2">
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

