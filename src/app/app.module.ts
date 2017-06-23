import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home' , component:HomeComponent},
  { path:'about' , component:AboutComponent},
  { path:'mywork' , component:MyWorkComponent},
  { path:'contactme' , component:ContactMeComponent},
];
@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent,
    MyWorkComponent, ContactMeComponent
  ],
  imports:
  [
    BrowserModule,
    AngularSvgIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
