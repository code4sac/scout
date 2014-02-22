define([
	'backbone',
	'communicator',
	'd3',
	'views/value-counts-view',
	'hbs!/templates/value-view',
],
function( Backbone, Communicator, d3, valueCountsView, valueViewTemp ) {
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		template: valueViewTemp,
		className: 'key',
		events: {
			'click':'showValueTypes'
		},
		showValueTypes: function(){

			var valueCounts = new valueCountsView({ collection: this.model.get('values') });
				valueCounts.render();

			$('#value-counts').empty().append( valueCounts.$el );
			
			$('.selected').removeClass('selected');
			this.$el.addClass('selected');
			
		}
	});
});