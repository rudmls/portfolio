import {Component} from "@angular/core";
import { HostListener } from '@angular/core';

@Component({
    selector: 'navigation-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    public stickyNavBar: boolean = false

    @HostListener('window:scroll', ['$event.target']) onScrollEvent(event: any) {
        let scroll = event.scrollingElement.scrollTop;
        this.stickyNavBar = scroll > 20;
    }

    public activeMenu: boolean = false;
    public darkMode: boolean = false;

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
