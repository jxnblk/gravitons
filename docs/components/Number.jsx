
var React = require('react');

var Number = React.createClass({

  render: function() {
    var styles = {
      value: {
        fontSize: '5vw',
        fontWeight: '700'
      },
      label: {}
    };
    return (
      <div>
        <div style={styles.value}>
          {this.props.value}
        </div>
        <div style={styles.label}
          className="h5 caps">
          {this.props.label}
        </div>
      </div>
    )
  }

});

module.exports = Number;

