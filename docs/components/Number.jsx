
import React from 'react'

class Number extends React.Component {

  render () {
    var styles = {
      value: {
        fontSize: '5vw',
        fontWeight: '700'
      },
      label: {}
    }

    return (
      <div>
        <div style={styles.value}>
          {this.props.value}
        </div>
        <div style={styles.label}
          className='h5 caps compact'>
          {this.props.label}
        </div>
      </div>
    )
  }

}

export default Number

