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

  public openMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

}
