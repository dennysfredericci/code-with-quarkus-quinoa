import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuComponent} from "./menu/menu.component";
import {VersionService} from "./services/version.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';

  version: string = 'Loading...';

  constructor(versionService:VersionService) {
    versionService.getVersion().subscribe(
      settings => {
      this.version = settings.version;
    },
    error => {
      this.version = 'Oops...';
    });
  }

}
