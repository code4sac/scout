'use strict';

exports.valueCollection = function( data, db, watch, keyValues ){
		var valueTypes;

			for (var entry in data){
				var parkingSpot = data[entry];

				for (var keys in parkingSpot){
					// if keys is one we want to watch
					if ( watch.indexOf( keys ) > -1 ){
						// navigate through array of objects
						
						if ( keyValues[keys].length > 0 ){
							var hasEntry = true;
							for (var i = 0; i <= keyValues[keys].length; i++){
								var valueEntry = keyValues[keys][i];
								
								// if it contains the value already
								if ( valueEntry && valueEntry.value === parkingSpot[keys] ){
									valueEntry.count = valueEntry.count+1;
									i = keyValues[keys].length
								} 
								else if ( i == keyValues[keys].length ) {
									hasEntry = false;
								}
							}

							if ( hasEntry == false ){
								keyValues[keys].push({ value: parkingSpot[keys], count: 0 });
							}
						} else {
							keyValues[keys].push({ value: parkingSpot[keys], count: 0 });
						}
					}
				}	 
		    }

		    valueTypes = new db( keyValues );
			    valueTypes.save(function (err) {
	  				if (err) console.log(err);
	  				console.log(keyValues)
				});
	}