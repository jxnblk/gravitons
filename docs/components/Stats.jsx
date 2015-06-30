
import React from 'react'
import filesize from 'filesize'
import Number from './Number.jsx'

class Stats extends React.Component {

  renderStat (stat, i) {
    return (
      <div key={i} className='dib c3 p1' style={{minWidth:128}}>
        <Number value={stat.value} label={stat.label} />
      </div>
    )
  }

  render () {
    var s = this.props.stats;
    var stats = [
      { value: filesize(s.gzipSize), label: 'Gzipped' },
      { value: s.rules.length, label: 'Rules' },
      { value: s.aggregates.selectors, label: 'Selectors' },
      { value: s.aggregates.declarations, label: 'Declarations' },
    ];
    return (
      <section className='tc cf py4 mxn3'>
        {stats.map(this.renderStat)}
      </section>
    )
  }

}

export default Stats

