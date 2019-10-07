import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ApartmentsComponent,
    FloorPlansComponent,
    AmenitiesComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
