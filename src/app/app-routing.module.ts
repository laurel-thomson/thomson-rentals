import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { AmenitiesComponent } from './amenities/amenities.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'floor-plans', component: FloorPlansComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
