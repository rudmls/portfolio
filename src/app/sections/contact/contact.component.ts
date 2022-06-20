import { Component } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  public faPhoneAlt = faPhoneAlt;
  public faEnvelope = faEnvelope;
  public faLinkedinIn = faLinkedinIn;
}
