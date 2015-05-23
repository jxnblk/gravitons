
var React = require('react');

var Styles = React.createClass({

  renderRule: function(rule, i) {
    return (
      <li key={i}
        className="x xb py2 avoid-break bb">
        <div className="x3 xn">
          <b>{rule.selector}</b>
        </div>
        <div className="h5 xa">
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
        <h2 className="h3 caps">Styles</h2>
        <ul className="pl0 c2" style={{listStyle:'none'}}>
          {this.props.rules.map(this.renderRule)}
        </ul>
      </section>
    )
  }

});

module.exports = Styles;

