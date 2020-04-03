import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBoxCardComponent } from './map-box-card.component';

describe('MapBoxCardComponent', () => {
  let component: MapBoxCardComponent;
  let fixture: ComponentFixture<MapBoxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBoxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBoxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
