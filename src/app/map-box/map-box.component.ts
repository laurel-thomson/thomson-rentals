import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const initializeMapbox: any;

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapBoxComponent implements OnInit {
  apartments = [
    {
      name: 'Rosewood Apartments',
      address: '515 W 11th St',
      active: true
    },
    {
      name: 'Towerview Apartments',
      address: '1010 N Walnut St',
      active: false
    },
    {
      name: 'Wabash Corners Apartments',
      address: '912 N Walnut St',
      active: false
    },
    {
      name: 'Buchanan Place Townhouses',
      address: '406 N Buchanan St',
      active: false
    }
  ]

  constructor() { }

  onPointClicked = (apartment) => {
    console.log(apartment);
    this.apartments.forEach(apt => {
      apt.active = apt.name === apartment;
    });
  }

  onCardClicked = (index) => {
    var markers = document.getElementsByClassName('marker');
    for (var i = 0; i < 4; i++) {
      if (i === index) {
        markers[i].classList.add('active');
      } else {
        markers[i].classList.remove('active');
      }
    }
    this.apartments.forEach((apt, i) => {
      apt.active = i === index;
    });
  }

  ngOnInit() {
    initializeMapbox(this.onPointClicked);
  }

}
