define([
	'backbone',
	'communicator',
	'oboe',
	'map',
	'views/value-counts-view',
	'hbs!/templates/value-count-view',
],
function( Backbone, Communicator, oboe, map, valueCountView, valueCountViewTemp ) {
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		template: valueCountViewTemp,
		className: 'value',
		events: {
			'click':'fetchData'
		},
		fetchData: function(){
			var value = this.model.get('value'),
				type = this.model.collection.parents[0].get('name'),
				markers = [];

			

			// console.time('foo')
			oboe('/tree-data?' + type + '=' + value)
			.node('!.*', function( data, path ){
				var coords = new google.maps.LatLng( data['POINT_Y'], data['POINT_X']),
					marker = new google.maps.Marker({
					      position: coords,
					      map: map
					  });
				markers.push( marker );
	   		})
		   .done(function(things) {
		   		console.log(things)
		   })
		   .fail(function(err) {
		   		console.log(err)
		      // we don't got it
		   });
		}
	});
});