import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-box-card',
  templateUrl: './map-box-card.component.html',
  styleUrls: ['./map-box-card.component.scss']
})
export class MapBoxCardComponent implements OnInit {
  @Input() apartment: String;
  @Input() address: String;
  @Input() active: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
