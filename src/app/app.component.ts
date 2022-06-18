import { Component } from '@angular/core';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title: string = 'portfolio';
  public faBars: IconDefinition = faBars
  public faMoon: IconDefinition = faMoon
  public toggle: boolean = false;
  public isDark: boolean = false;

  public handleClick(event: any): void {
    console.log((event.target as Element).className)
    this.toggle = !this.toggle;
  }

  public switchMode(): void {
    this.isDark = !this.isDark;
  }

}
