define([
	'backbone',
	'communicator',
	'models/value-model',
	'backbone.associations'
], function( Backbone, Communicator, valueModel ){
	'use strict';

	return Backbone.AssociatedModel.extend({
		initialize: function(){
			this.set('valuesNum', this.get('values').length );
		},
		relations: [
			{
				type: Backbone.Many,
				relatedModel: valueModel,
				key: 'values'
			}
		]
	});

	// var parkingValues = new parkingValuesModel();

	// return parkingValues;
});