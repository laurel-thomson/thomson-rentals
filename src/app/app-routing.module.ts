import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'floorplans', component: FloorPlansComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0,70]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
