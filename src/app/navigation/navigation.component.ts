import { Component } from "@angular/core";

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  public toggle: boolean = false;
  public darkMode: boolean = false;

  public handleClick(): void {
    this.toggle = !this.toggle;
  }

  public switchMode(): void {
    document.body.classList.toggle("dark-theme")
    this.darkMode = !this.darkMode;
  }

}
