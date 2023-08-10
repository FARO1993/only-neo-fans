import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './neo/pages/home/home.component';
import { AboutComponent } from './neo/pages/about/about.component';
import { BenefitsComponent } from './neo/pages/benefits/benefits.component';
import { ContactComponent } from './neo/pages/contact/contact.component';
import { ManagementComponent } from './neo/pages/management/management.component';
import { SuccessStoriesComponent } from './neo/pages/success-stories/success-stories.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BenefitsComponent,
    ContactComponent,
    ManagementComponent,
    SuccessStoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
