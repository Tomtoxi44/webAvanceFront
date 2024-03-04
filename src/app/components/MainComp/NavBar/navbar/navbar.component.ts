import { Component } from '@angular/core';
import { LogoMenuComponent } from '../../logo-menu/logo-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoMenuComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  imagePath = 'assets/d&d.png';
}
