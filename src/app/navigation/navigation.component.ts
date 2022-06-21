import {Component} from "@angular/core";
import { HostListener } from '@angular/core';

@Component({
    selector: 'navigation-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    constructor() {
        this.setThemePreference();
    }

    public stickyNavBar: boolean = false
    public activeMenu: boolean = false;
    public darkMode: boolean = true;

    public setThemePreference(): void {
        let currentHour = new Date().getHours();
        if(currentHour >= 18 || currentHour <= 6) {
            document.body.classList.toggle("dark-theme")
        }
    }

    @HostListener('window:scroll', ['$event.target']) onScrollEvent(event: any) {
        let scroll = event.scrollingElement.scrollTop;
        this.stickyNavBar = scroll > 20;
    }

    public handleClick(): void {
        this.activeMenu = !this.activeMenu;
    }

    public switchMode(): void {
        document.body.classList.toggle("dark-theme")
        this.darkMode = !this.darkMode;
    }

    public menuItems = [
        {
            title: 'Profil',
            url: '#profile',
        },
        {
            title: 'Compétences',
            url: '#skills',
        },
        {
            title: 'Formations',
            url: '#diplomas',
        },
        {
            title: 'Expériences',
            url: '#experiences',
        },
        {
            title: 'Contact',
            url: '#contact',
        }
    ]
}
