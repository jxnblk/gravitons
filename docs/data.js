
var fs = require('fs');
var pkg = require('../package.json');
var postcss = require('postcss');
var stats = require('./stats.json');

var gravitons = fs.readFileSync('css/gravitons.min.css', 'utf8');

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
  href: '/gravitons',
  description: pkg.description,
  rules: rules,
  stats: stats,
  links: [
    { href: '//github.com/jxnblk/gravitons', text: 'GitHub' },
    { href: '//npmjs.com/package/gravitons', text: 'npm' }
  ]
};

