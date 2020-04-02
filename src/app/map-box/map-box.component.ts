import { Component, OnInit } from '@angular/core';
declare const initializeMapbox: any;

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {

  constructor() { }

  onPointClicked = function(apartment) {
    console.log(apartment);
  }

  ngOnInit() {
    initializeMapbox(this.onPointClicked);
  }

}
