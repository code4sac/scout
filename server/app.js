'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var fs = require('fs');
var csv = require('csv');

var trees = require('./routes/tree-data');
var parking = require('./routes/parking-data');

var app = express();

app.configure(function(){
    app.set('port', 9000);
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

// simple log
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
app.use(express.static( path.join( __dirname, '../app') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));

// tree data
app.get('/trees', trees.generateData );
app.get('/tree-data', trees.showData );
app.get('/tree-values', trees.values );

// parking data
app.get('/parking', parking.generateData );
app.get('/parking-data', parking.showData );
app.get('/parking-values', parking.values );

app.get('/', function(req, res) {
  	res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

// start server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started!');
});