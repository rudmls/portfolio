import { Component } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public profileImage: String = 'assets/profile.jpg';
  public faGithub: IconDefinition = faGithub;
  public faLinkedin: IconDefinition = faLinkedinIn;
}
