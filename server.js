var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://admin:admin@ds127065.mlab.com:27065/amigodb', function(err){
	if(err){
		console.log(err)
	}else{
		console.log('Connected on database !!!')
	}
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static(__dirname + '/frontend'))

app.listen(3000, function(err){
	if(err){
		console.log(err)
	}else{
		console.log('Listening on port 3000')
	}
})