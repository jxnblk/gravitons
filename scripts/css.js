
var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var atImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var calc = require('postcss-calc');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer');
var cssstats = require('cssstats');
var filesize = require('filesize');
var pkg = require('../package.json');

var processor = postcss([
  atImport(),
  customProperties(),
  calc(),
  autoprefixer(),
]);

var src = fs.readFileSync(path.join(__dirname, '../src/gravitons.css'), 'utf8');

var css = processor
  .process(src, { from: 'src/gravitons.css', to: 'css/gravitons.css' })
  .css;

var min = processor
  .use(csswring({}))
  .process(css)
  .css

var stats = cssstats(min);

css = [
    '',
    '/*! gravitons */',
    '',
    '/*',
    '  v' + pkg.version,
    '  http://jxnblk.com/gravitons',
    '',
    ' Size: ' + filesize(stats.size),
    ' Gzipped: ' + filesize(stats.gzipSize),
    ' Rules: ' + stats.rules.length,
    ' Declarations: ' + stats.aggregates.declarations,
    ' Selectors: ' + stats.aggregates.selectors,
    ' Properties: ' + stats.aggregates.properties.length,
    ' Average Specificity: ' + stats.averages.specificity,
    '',
    '*/'
  ].join('\n') +
  css;

fs.writeFileSync(path.join(__dirname, '../docs/stats.json'), JSON.stringify(stats, null, 2));
fs.writeFileSync(path.join(__dirname, '../css/gravitons.css'), css);
fs.writeFileSync(path.join(__dirname, '../css/gravitons.min.css'), min);

