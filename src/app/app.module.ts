import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { HomeComponent } from './sections/home/home.component';
import { DiplomaComponent } from './sections/diploma/diploma.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RiToggleFill, RiToggleLine, RiMoonLine, RiMoonFill, RiMenu4Fill, RiCloseFill, RemixIconModule } from "angular-remix-icon";

const icons = {
  RiToggleFill, RiToggleLine, RiMoonLine, RiMoonFill, RiMenu4Fill, RiCloseFill
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    HomeComponent,
    SkillsComponent,
    DiplomaComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RemixIconModule.configure(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
