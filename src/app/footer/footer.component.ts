import { Component } from "@angular/core";

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.css']
})

export class FooterComponent {

    public year: Number = new Date().getFullYear()

}