import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-menu.component.html'
})
export class LogoMenuComponent {

  isMenuVisible = false;

  onLogoClick(): void {
    console.log("Logo cliqué !");
    this.isMenuVisible = !this.isMenuVisible;  
  }
}
