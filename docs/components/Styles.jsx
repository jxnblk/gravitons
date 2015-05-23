
var React = require('react');

var Styles = React.createClass({

  renderRule: function(rule, i) {
    return (
      <li key={i} className="x py2 bb">
        <div className="mr1 x8">
          <b>{rule.selector}</b>
        </div>
        <div>
          {rule.declarations.map(this.renderDeclaration)}
        </div>
      </li>
    )
  },

  renderDeclaration: function(d, i) {
    return (
      <span key={i}>
        {d.prop}: {d.value};{' '}
      </span>
    )
  },

  render: function() {
    return (
      <section id="styles">
        <h2>Styles</h2>
        <ul className="bt p0">
          {this.props.rules.map(this.renderRule)}
        </ul>
      </section>
    )
  }

});

module.exports = Styles;

