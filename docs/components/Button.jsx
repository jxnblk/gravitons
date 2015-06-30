
import React from 'react'

class Button extends React.Component {

  render () {
    var style = {
      display: 'inline-block',
      fontWeight: '700',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      lineHeight: '3',
      padding: '0 1rem',
      color: '#fff',
      borderRadius: '3px'
    }
    return (
      <a {...this.props}
        style={style}
        className='bg-blue'>
        {this.props.children}
      </a>
    )
  }

}

export default Button

