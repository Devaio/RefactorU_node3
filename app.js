
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		res.setHeader('Content-Type', 'text/html');
		res.send(data);
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


app.post('/', function(req, res){
	console.log(req.body.email)
	console.log(req.body.pass)

	//form validation
	if(req.body.email && req.body.pass){
		res.send({success : 'Thanks for logging in!'})
	}
	else {
		res.send({error : "Please make sure the form is complete!"})
	}

});


