import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ngSlick';

  slides = [
    {img: "../assets/images/first_image.jpg"},
    {img: "../assets/images/second_image.jpg"},
    {img: "../assets/images/third_image.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows" : false,
    "dots": true,
    "infinite": true,
    "fade": true
  };

  constructor() { }

  ngOnInit() {
  }

}
