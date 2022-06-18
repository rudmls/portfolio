import { Component } from "@angular/core";

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

    public cvUrl: String = 'assets/cv.pdf';
    public profileImage: String = 'assets/profile.jpg';
}
