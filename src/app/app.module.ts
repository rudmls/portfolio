import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { IconModule } from '@ant-design/icons-angular';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ProfileComponent} from './sections/profile/profile.component';
import {HomeComponent} from './sections/home/home.component';
import {DiplomasComponent} from './sections/diplomas/diplomas.component';
import {ExperiencesComponent} from './sections/experiences/experiences.component';
import {SkillsComponent} from './sections/skills/skills.component';
import {ContactComponent} from './sections/contact/contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
    RiToggleFill,
    RiToggleLine,
    RiMoonLine,
    RiMoonFill,
    RiMenu4Fill,
    RiCloseFill,
    RemixIconModule
} from "angular-remix-icon";



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
        DiplomasComponent,
        ExperiencesComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        IconModule,
        FontAwesomeModule,
        RemixIconModule.configure(icons),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
