define([
	'backbone',
	'communicator',
	'd3',
	'views/value-type-view',
	'hbs!/templates/value-views',

],
function( Backbone, Communicator, d3, valueView, valueViewsTemp ) {
    'use strict';

	return Backbone.Marionette.CompositeView.extend({
		template: valueViewsTemp,
		itemView: valueView,
		className: 'panel',
		events: {
			'click .key':'slideLeft'
		},
		onRender: function(){
		},
		slideLeft:function(){
			this.$el.parent().animate({'left':-280}, 100);
			console.log(this.$el)
		}
	});
});