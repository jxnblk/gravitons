
import React from 'react'
import Head from './Head.jsx'
import { Header, Footer, CarbonAd } from 'blk'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import Intro from './Intro.jsx'
import Stats from './Stats.jsx'
import Install from './Install.jsx'
import Features from './Features.jsx'
import Elements from './Elements.jsx'
import Styles from './Styles.jsx'
import Definition from './Definition.jsx'
import Related from './Related.jsx'

class Root extends React.Component {

  render () {
    return (
      <html>
        <Head {...this.props} />
        <body className='p3'>
          <Container>
            <div className='tc py4'>
              <Logo />
            </div>
            <Header {...this.props} />
            <Intro {...this.props} />
            <Stats {...this.props} />
            <Install />
            <Features {...this.props} />
          </Container>
          <Styles {...this.props} />
          <Definition {...this.props} />
          <Related />
          <Footer {...this.props} />
        </body>
      </html>
    )
  }

}

export default Root

