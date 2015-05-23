
var React = require('react');
var filesize = require('filesize');
var Number = require('./Number.jsx');

var Stats = React.createClass({

  render: function() {
    var s = this.props.stats;
    return (
      <section className="tc x xw py4 mxn3">
        <div className="xa px3 py1">
          <Number value={filesize(s.gzipSize)} label="Gzipped" />
        </div>
        <div className="xa px3 py1">
          <Number value={s.rules.length} label="Rules" />
        </div>
        <div className="xa px3 py1">
          <Number value={s.aggregates.selectors} label="Selectors" />
        </div>
        <div className="xa px3 py1">
          <Number value={s.aggregates.declarations} label="Declarations" />
        </div>
      </section>
    )
  }

});

module.exports = Stats;

