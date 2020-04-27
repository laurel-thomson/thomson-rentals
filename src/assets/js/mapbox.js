var initializeMapbox = function(clickHandler) {
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

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    var showPopup = function(marker) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
         
        var coordinates = marker.geometry.coordinates.slice();
        var description = marker.properties.description;
        
         
        // Populate the popup and set its coordinates
        // based on the feature found.
        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    }

    var hidePopup = function(marker) {
        map.getCanvas().style.cursor = '';
        popup.remove();
    }

    // add markers to map
    geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
        el.addEventListener('click', () => clickHandler(marker.properties.description));
        el.addEventListener('mouseenter', () => showPopup(marker));
        el.addEventListener('mouseout', () => hidePopup(marker));
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
}