
import React from 'react'
import Container from './Container.jsx'

class Intro extends React.Component {

  render () {
    return (
      <section className='py4'>
        <Container>
          <p className='h2'>
            Gravitons is an extremely lightweight suite of CSS layout utilities based on modular scales and inspired by the <a href='http://en.wikipedia.org/wiki/Unix_philosophy' target='_blank'>Unix Philosophy</a>.
          </p>
        </Container>
      </section>
    )
  }

}

export default Intro

