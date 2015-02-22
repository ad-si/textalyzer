var fs = require('fs'),
	path = require('path'),
	text = fs.readFileSync(
		path.resolve(__dirname, '../examples/1984.txt'),
		'utf-8'
	),
	textalyzer = require('../index.js')


// console.log(textalyzer(text).getStats())

console.log(textalyzer(text).getFrequencyHistogram())