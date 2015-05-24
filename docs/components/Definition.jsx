
var React = require('react');
var Blockquote = require('./Blockquote.jsx');
var Button = require('./Button.jsx');
var Install = require('./Install.jsx');

var Definition = React.createClass({

  render: function() {
    var styles = {
      container: {
        maxWidth: '40em',
        margin: '0 auto'
      }
    };
    return (
      <section style={styles.container} className="tc py4">
        <Blockquote>
          The graviton is a hypothetical elementary particle that mediates the force of gravitation in the framework of quantum field theory.
        </Blockquote>
        <Install />
        <Button href="//github.com/jxnblk/gravitons">Github</Button>
      </section>
    )
  }

});

module.exports = Definition;

