import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ApartmentsComponent,
    ContactFormComponent,
    FloorPlansComponent,
    AmenitiesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
