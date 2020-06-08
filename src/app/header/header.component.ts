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
    { name : 'Home', link : '/home' },
    { name : 'Apartments', link : '/apartments' },
    { name : 'Floor Plans', link : '/floorplans' },
    { name : 'Thomson Rentals', link : '/home' },
    { name : 'Gallery', link : '/gallery' },
    { name : 'Contact', link : '/contact' },
  ];

  public toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

}
