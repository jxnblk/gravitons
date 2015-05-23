
var React = require('react');

var Head = React.createClass({

  render: function() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
          type="text/css"/>
      </head>
    )
  }

});

module.exports = Head;

