import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoibGF1cmVsLXRob21zb24iLCJhIjoiY2s4ZHJlOGF6MHhiZjNqbzV4YXk1eGZ1eCJ9.6cHeuIroLCKeqvNYOZIrJw';
    var map = new mapboxgl.Map({
      container: 'mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-94.8725, 40.3461], // starting position [lng, lat]
      zoom: 13 // starting zoom
    });

    const geoJson = [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': ['-94.8725', '40.3461']
        },
        'properties': {
          'message': 'helloworld'
        }
      }
    ];

    const data = {
          type: 'FeatureCollection',
          features: geoJson
    };
    
    map.on('load', (event) => {
      map.addSource('customMarker', {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: []
              }
        });
        map.getSource('customMarker').setData(data);
        map.addLayer({
                id: 'customMarketid',
                source: 'customMarker',
                type: 'symbol',
                layout: {
                  'text-field': 'hello',
                  'text-size': 24,
                  'text-transform': 'uppercase',
                  'icon-image': 'marker-15',
                  'text-offset': [0, 1.5]
                },
                paint: {
                  'text-color': '#f16624',
                  'text-halo-color': '#fff',
                  'text-halo-width': 2
                }
              });
    });
  }

}
