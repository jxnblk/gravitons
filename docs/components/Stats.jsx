
var React = require('react');
var filesize = require('filesize');
var Number = require('./Number.jsx');

var Stats = React.createClass({

  renderStat: function(stat, i) {
    return (
      <div key={i} className="dib c3 p1" style={{minWidth:128}}>
        <Number value={stat.value} label={stat.label} />
      </div>
    )
  },

  render: function() {
    var s = this.props.stats;
    var stats = [
      { value: filesize(s.gzipSize), label: 'Gzipped' },
      { value: s.rules.length, label: 'Rules' },
      { value: s.aggregates.selectors, label: 'Selectors' },
      { value: s.aggregates.declarations, label: 'Declarations' },
    ];
    return (
      <section className="tc cf py4 mxn3">
        {stats.map(this.renderStat)}
      </section>
    )
  }

});

module.exports = Stats;

