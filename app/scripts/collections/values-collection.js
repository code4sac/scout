define([
	'backbone',
	'communicator',
	'models/value-model'
],
function( Backbone, Communicator, valueModel ) {
    'use strict';

	return Backbone.Collection.extend({
		model: valueModel
	});
});