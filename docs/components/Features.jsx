
import React from 'react'
import Container from './Container.jsx'

class Features extends React.Component {

  render () {
    return (
      <section id='features' className='py4'>
        <Container>
          <h2 className='h3 caps'>Features</h2>
          <ul className='h3 p0 cols1'>
            <li>Less than 1KB</li>
            <li>Shorthand naming convention</li>
            <li>Quick to internalize</li>
            <li>No colors</li>
            <li>No media queries</li>
            <li>No monolithic components</li>
          </ul>
        </Container>
      </section>
    )
  }

}

export default Features

