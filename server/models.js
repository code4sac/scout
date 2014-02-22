
var mongoose = require('mongoose');
// start mongoose
mongoose.connect('mongodb://localhost/sit');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

	var treeSchema = new mongoose.Schema({
		OBJ_CODE: String,
	    ADDRESS_NUMBER: String,
	    STREET: String,
	    LANDUSE: String,
	    PLANTTYPE: String,
	    GROWSPACE: String,
	    CONDUCTOR: String,
	    HDSCAPE: String,
	    SPECIES: String,
	    BOTANICAL: String,
	    CULTIVAR: String,
	    STEMS: String,
	    DBH: String,
	    ROOT: String,
	    WOOD: String,
	    FOLIAGE: String,
	    SHAPE: String,
	    SHAPE_FID: String,
	    POINT_X: String,
	    POINT_Y: String 
	});

	var treeDataTypes = mongoose.Schema({
		ADDRESS_NUMBER: Array,
	    STREET: Array,
	    LANDUSE: Array,
	    PLANTTYPE: Array,
	    SPECIES: Array,
	    BOTANICAL: Array,
	    DBH: Array
	});

	var parkingSchema = new mongoose.Schema({
	    "ID": String,
	    "ADDRESS": String,
	    "AORB": String,
	    "STREET": String,
	    "SUFFIX": String,
	    "PREFIX": String,
	    "EVENODD": String,
	    "TIMELIMIT": String,
	    "DAYRESTRIC": String,
	    "PKGTYPE": String,
	    "AORP": String,
	    "PERMITAREA": String,
	    "ROUTE": String,
	    "ZONE": String,
	    "MAXRATE": String,
	    "SHAPE": String,
	    "SHAPE_FID": String,
	    "POINT_X": String,
	    "POINT_Y": String
    });

    var parkingDataTypes = new mongoose.Schema({
   		'PKGTYPE' : Array,
		'STREET' : Array,
		'TIMELIMIT' : Array,
		'DAYRESTRIC' : Array,
		'EVENODD' : Array,
		'PERMITAREA' : Array,
		'ZONE' : Array,
		'ROUTE' : Array
    });
    
    exports.Parking = mongoose.model( 'parking', parkingSchema );
exports.ParkingValues = mongoose.model( 'value', parkingDataTypes );
exports.Trees = mongoose.model( 'trees', treeSchema );
exports.TreeValues = mongoose.model( 'tree_values', treeDataTypes );
});


