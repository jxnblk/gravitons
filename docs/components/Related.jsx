
import React from 'react'
import Container from './Container.jsx'

class Related extends React.Component {

  render () {
    return (
      <section id='related' className='tc py4'>
        <Container>
          <h2 className='h3 caps'>Related</h2>
          <a href='//tachyons.io' className='dib p1 m1'>Tachyons</a>
          <a href='//basscss.com' className='dib p1 m1'>Basscss</a>
        </Container>
      </section>
    )
  }

}

export default Related

