import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileNavOpen: boolean; 
  constructor() { }
  ngOnInit() {
  }

  navItems = [
    { name : 'Apartments', link : '/apartments' },
    { name : 'Floor Plans', link : '/floorplans' },
    { name : 'Thomson Rentals', link : '/home' },
    { name : 'Amenities', link : '/amenities' },
    { name : 'Gallery', link : '/gallery' },
  ];

  public toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

}
