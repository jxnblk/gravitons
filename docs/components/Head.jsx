
import React from 'react'
import css from '../docs.css'

class Head extends React.Component {

  render () {
    return (
      <head>
        <meta charSet='utf-8' />
        <title>{this.props.title}</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='description' content={this.props.description} />
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <link
          href='http://fonts.googleapis.com/css?family=Roboto:400,700'
          rel='stylesheet'
          type='text/css'/>
      </head>
    )
  }

}

export default Head

