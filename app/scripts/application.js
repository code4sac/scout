define([
	'backbone',
	'communicator',
	'map',
	'models/parking-values-model',
	'collections/values-collection',
	'views/value-types-view',
	'oboe'
],
function( Backbone, Communicator, map, parkingDataValuesModel, ValuesCollection, valueTypesView, oboe ) {
    'use strict';


	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		values: '#value-selects'
	});

	/* Add initializers here */
	App.addInitializer( function () {
		var valuesCollection = new ValuesCollection();
		
		$.ajax({
				url: '/tree-values',
				success: function( data ){
					for (var keys in data[0]){
						if ( keys !== '_id' && keys !== '__v')
						valuesCollection.add( new parkingDataValuesModel({ name: keys, values: data[0][keys] }) );
					}
				}
		}).done(function(){
			App.values.show( new valueTypesView({ collection: valuesCollection }) );
		});

		

		
		
	});

	return App;
});
