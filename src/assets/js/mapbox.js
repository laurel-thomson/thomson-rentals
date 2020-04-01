var initializeMapbox = function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmVsLXRob21zb24iLCJhIjoiY2s4ZHJlOGF6MHhiZjNqbzV4YXk1eGZ1eCJ9.6cHeuIroLCKeqvNYOZIrJw';
    var map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
    
    map.on('load', function() {
    map.loadImage(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
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
    'coordinates': [0, 0]
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
    'icon-size': 0.25
    }
    });
    }
    );
    });
}