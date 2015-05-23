
var React = require('react');
var Blockquote = require('./Blockquote.jsx');

var Definition = React.createClass({

  render: function() {
    var styles = {
      container: {
        maxWidth: '40em',
        margin: '0 auto'
      }
    };
    return (
      <section style={styles.container} className="py4">
        <Blockquote>
          The graviton is a hypothetical elementary particle that mediates the force of gravitation in the framework of quantum field theory.
          The word comes from the Latin <i>gravitas</i>, meaning “weight, seriousness.” 
        </Blockquote>
      </section>
    )
  }

});

module.exports = Definition;

