
import React from 'react'

class Elements extends React.Component {

  renderRule (rule, i) {
    let style = {
      width: 96
    }
    let name = rule.selector.split('::')[0]

    return (
      <div key={i}
        className='dib tc p1 b' style={style}>
        <b className='h2 mt0 mb2 break-word'>{name}</b>
      </div>
    )
  }

  render () {
    return (
      <section id='styles' className='tc py3'>
        {this.props.rules.map(this.renderRule)}
      </section>
    )
  }

}

export default Elements

