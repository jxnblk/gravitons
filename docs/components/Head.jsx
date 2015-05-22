
var React = require('react');

var Head = React.createClass({

  render: function() {
    console.log('props.css', this.props.css);
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
    )
  }

});

module.exports = Head;

