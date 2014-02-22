
var fs = require('fs');
var csv = require('csv');
var models = require('../models');
var valuesCollection = require('../values-collection');

exports.generateData = function( req, res ){
		csv().from.path(__dirname+'/csv/trees.csv', { delimiter: ',', escape: '"' })
		.to.stream(fs.createWriteStream(__dirname+'/csv/trees_2.json'))
		.transform( function(row){
		  	var text = JSON.stringify(row[4]),
		  	td = /<td[^>]*>(.*?)<\/td>/g,
		  	id = row[0],
		  	result = { },
		  	t = text.match(td),
		  	finale;

			result[id] = {}
		  	
		  	if (t)
		  	for (var i = 3; i < t.length; i+=2){
		  		var key = t[i].replace(/<\/?td>/g,''),
		  			value = t[i+1].replace(/<\/?td>/g,'').replace(/&lt;/g,'').replace(/&gt;/g,'').toLowerCase();
		  		result[id][key] = value;
		  	}

		  	var tree = new models.Trees( result[id] );
				tree.save();

		  	return row;
		})
		.on('record', function(row,index){
		  console.log('#'+index);
		})
		.on('end', function(count){
		  console.log('Number of lines: '+count);
		})
		.on('error', function(error){
		  console.log(error.message);
		}); 
}

exports.showData = function( req, res ){
		var watch = ['ADDRESS_NUMBER', 'STREET', 'LANDUSE', 'PLANTTYPE', 'SPECIES', 'BOTANICAL', 'DBH'];
		
		var keyValues = {
			'ADDRESS_NUMBER': [],
		    STREET: [],
		    LANDUSE: [],
		    PLANTTYPE: [],
		    SPECIES: [],
		    BOTANICAL: [],
		    DBH: []
		}

		models.Trees.find(req.query, function(error, data){
		    // valueCollection( data, TreeValues, watch, keyValues )
		    res.send( data );
		});
}

exports.values = function( req, res ){
	models.TreeValues.find({}, function( err, data){
		res.send( data );
	});
}

