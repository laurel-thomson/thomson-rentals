var initializeMapbox = function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmVsLXRob21zb24iLCJhIjoiY2s4ZHJlOGF6MHhiZjNqbzV4YXk1eGZ1eCJ9.6cHeuIroLCKeqvNYOZIrJw';
    var map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-94.8801098,40.3520000], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
    
    map.on('load', function() {
        map.loadImage(
            'assets/images/marker.png',
            function(error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-94.8803936, 40.3554965]
                                }
                            },
                            {
                                'type' : 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-94.8800693,40.3546354]
                                }
                            },
                            {
                                'type' : 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-94.8801098,40.3538782]
                                }
                            },
                            {
                                'type' : 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-94.8765567,40.3489813]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'cat',
                        'icon-size': 0.6
                    }
                });
            }
        );
    });
}