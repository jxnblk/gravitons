
var fs = require('fs');
var path = require('path');
var pkg = require('../package.json');
var postcss = require('postcss');
var customProperties = require('postcss-custom-properties');
var csswring = require('csswring');

var gravitons = fs.readFileSync('css/gravitons.min.css', 'utf8');

var sitecss = fs.readFileSync(path.join(__dirname, './docs.css'), 'utf8');

var css = [
  postcss().process(sitecss).css,
  gravitons
].join('');

css = postcss([customProperties()])
  .use(csswring())
  .process(css)
  .css;

var styles = postcss.parse(gravitons);

var rules = [];
styles.eachRule(function(rule, i) {
  var declarations = [];
  rule.eachDecl(function(d, i) {
    declarations.push(d);
  });
  rules.push({
    selector: rule.selector,
    declarations: declarations
  });
});

module.exports = {
  title: 'Gravitons',
  description: pkg.description,
  css: css,
  rules: rules
};

