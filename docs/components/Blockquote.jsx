
import React from 'react'

class Blockquote extends React.Component {

  render () {
    return (
      <blockquote className="h3 m0 mb4">
        {this.props.children}
      </blockquote>
    )
  }

}

export default Blockquote

