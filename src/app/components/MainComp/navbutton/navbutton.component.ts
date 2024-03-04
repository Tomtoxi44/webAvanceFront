import { NgIf } from '@angular/common';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css'
})
export class NavbuttonComponent {

  public label: string = 'Button label'
  @Input() display?: boolean;
  @Input() displayFalse?: boolean;
  isContentVisible = false;

  toggleButtonVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }
}