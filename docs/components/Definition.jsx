
import React from 'react'
import Blockquote from './Blockquote.jsx'
import Button from './Button.jsx'
import Install from './Install.jsx'

class Definition extends React.Component {

  render () {
    let styles = {
      container: {
        maxWidth: '40em',
        margin: '0 auto'
      }
    }

    return (
      <section style={styles.container} className='py4'>
        <Blockquote>
          The graviton is a hypothetical elementary particle that mediates the force of gravitation in the framework of quantum field theory.
        </Blockquote>
        <Install />
        <Button href='//github.com/jxnblk/gravitons'>Github</Button>
      </section>
    )
  }

}

export default Definition

