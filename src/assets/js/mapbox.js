var initializeMapbox = function(clickHandler
    ) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmVsLXRob21zb24iLCJhIjoiY2s4ZHJlOGF6MHhiZjNqbzV4YXk1eGZ1eCJ9.6cHeuIroLCKeqvNYOZIrJw';
    var map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-94.8801098,40.3520000], // starting position [lng, lat]
        zoom: 15, // starting zoom
        dragPan: window.innerWidth >= 1024
    });

    var geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-94.8803936, 40.3554965]
                },
                'properties': {
                    'description': 'Rosewood Apartments'
                }
            },
            {
                'type' : 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-94.8800693,40.3546354]
                },
                'properties': {
                    'description': 'Towerview Apartments'
                }
            },
            {
                'type' : 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-94.8801098,40.3538782]
                },
                'properties': {
                    'description': 'Wabash Corners Apartments'
                }
            },
            {
                'type' : 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-94.8765567,40.3489813]
                },
                'properties': {
                    'description': 'Buchanan Place Townhouses'
                }
            }
        ]
    };

    // add markers to map
    geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
}