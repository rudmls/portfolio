import {Component} from "@angular/core";
import { HostListener } from '@angular/core';
import { CookieConsent } from "../utils/cookie.consent"

@Component({
    selector: 'navigation-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    public stickyNavBar: boolean = false
    public activeMenu: boolean = false;
    public darkMode: boolean | undefined;

    constructor() {
        let cookie: string = CookieConsent.getCookie("dark_theme");
        if (!cookie) {
            this.setThemePreference();
        } else if (cookie === "true") {
            this.darkMode = true
            document.body.classList.toggle("dark-theme")
        }
    }

    public setThemePreference(): void {
        let currentHour = new Date().getHours();
        if(currentHour >= 18 || currentHour <= 6) {
            this.darkMode = true
            document.body.classList.add("dark-theme")
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
        CookieConsent.setCookie("dark_theme", this.darkMode ? "true" : "false", 1)
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
