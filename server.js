'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(process.cwd() + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/resume', function (req, res) {
	var file = './public/files/eakintechnicalResumeOctoberTenth2016.pdf';
	res.download(file);
});

app.listen(PORT, function () {
	console.log('App listening on PORT: ' + PORT);
});
