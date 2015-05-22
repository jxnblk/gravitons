
var fs = require('fs');
var path = require('path');
var pkg = require('../package.json');
var postcss = require('postcss');
var csswring = require('csswring');

var css = [
  fs.readFileSync(path.join(__dirname, './docs.css'), 'utf8'),
  fs.readFileSync('css/gravitons.min.css', 'utf8')
].join('');

css = postcss()
  .use(csswring())
  .process(css)
  .css;

module.exports = {
  title: 'Gravitons',
  description: pkg.description,
  css: css
};

