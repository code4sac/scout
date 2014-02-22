define([
	'backbone',
	'communicator',
	'backbone.associations'
], function( Backbone, Communicator ){
	'use strict';

	return Backbone.AssociatedModel.extend({
		defaults: {
			value: '',
			count: 0
		}
	});
});