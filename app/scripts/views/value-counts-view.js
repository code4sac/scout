define([
	'backbone',
	'communicator',
	'd3',
	'views/value-count-view',
	'hbs!/templates/value-counts-view',

],
function( Backbone, Communicator, d3, valueCountView, valueCountsViewTemp ) {
    'use strict';

	return Backbone.Marionette.CompositeView.extend({
		template: valueCountsViewTemp,
		itemView: valueCountView,
		className: 'panel',

		onRender: function(){
			
		}
	});
});