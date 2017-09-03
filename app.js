const Sonus = require('sonus')

const hotwords = [{ file: 'resources/friday.pmdl', hotword: 'friday' }]
const sonus = Sonus.init({ hotwords })

Sonus.start(sonus)
sonus.on('hotword', (index, keyword) => console.log("我听到了"))
// sonus.on('final-result', console.log)