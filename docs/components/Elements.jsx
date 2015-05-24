
var React = require('react');

var Elements = React.createClass({

  renderRule: function(rule, i) {
    var style = {
      width: 96
    };
    var name = rule.selector.split('::')[0];
    return (
      <div key={i}
        className="dib tc p1 b" style={style}>
        <b className="h2 mt0 mb2 break-word">{name}</b>
      </div>
    )
  },

  render: function() {
    return (
      <section id="styles" className="tc py3">
        {this.props.rules.map(this.renderRule)}
      </section>
    )
  }

});

module.exports = Elements;

