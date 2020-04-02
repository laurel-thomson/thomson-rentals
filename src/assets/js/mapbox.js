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
                map.addControl(new mapboxgl.FullscreenControl());

                map.on('click', 'points', function(e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;
                     
                    // Ensure that if the map is zoomed out such that multiple
                    // copies of the feature are visible, the popup appears
                    // over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                     
                    new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);

                    clickHandler(description);
                });
            }
        );
    });
}