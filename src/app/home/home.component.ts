import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      desktop_img: "https://ik.imagekit.io/thomsonrentals/third_image_3drkkZKEj3.jpg?tr=w-1200,h-500",
      mobile_img: "https://ik.imagekit.io/thomsonrentals/third_image_3drkkZKEj3.jpg?tr=w-500,h-300"
    },
    {
      desktop_img: "https://ik.imagekit.io/thomsonrentals/first_image_3PxbtWMvq.jpg?tr=w-1200,h-500",
      mobile_img: "https://ik.imagekit.io/thomsonrentals/first_image_3PxbtWMvq.jpg?tr=w-500,h-300"
    },
    {
      desktop_img: "https://ik.imagekit.io/thomsonrentals/second_image_D1lVmrzo_.jpg?tr=w-1200,h-500",
      mobile_img: "https://ik.imagekit.io/thomsonrentals/second_image_D1lVmrzo_.jpg?tr=w-500,h-300"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
