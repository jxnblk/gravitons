
const fs = require('fs')
const path = require('path')
const cssstats = require('cssstats')
const gravitons = require('..')()

const stats = cssstats(gravitons)

fs.writeFileSync(path.join(__dirname, 'stats.json'), JSON.stringify(stats))

