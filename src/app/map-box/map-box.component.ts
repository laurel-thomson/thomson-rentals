import { Component, OnInit } from '@angular/core';
declare const initializeMapbox: any;

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
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
    this.apartments.forEach(apt => {
      apt.active = apt.name === apartment;
    });
  }

  ngOnInit() {
    initializeMapbox(this.onPointClicked);
  }

}
