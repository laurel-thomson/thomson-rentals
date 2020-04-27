import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-plans',
  templateUrl: './floor-plans.component.html',
  styleUrls: ['./floor-plans.component.scss']
})
export class FloorPlansComponent implements OnInit {

  slides = [
    {
      img : '../../assets/images/floor_plans/one_bedroom.png' 
    },
    {
      img : '../../assets/images/floor_plans/two_bedroom.png' 
    },
    {
      img : '../../assets/images/floor_plans/three_bedroom_1.png' 
    },
    {
      img : '../../assets/images/floor_plans/three_bedroom_2.png' 
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
