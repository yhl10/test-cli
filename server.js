var express = require('express');
var app = express();
 
app.get('/demo', function (_req, res) {
    console.log('receive request')
	// res.setHeader('Cache-Control', 'private,max-age=3')
    res.send('Hello, Sherlock')
})
 
app.listen(1010)