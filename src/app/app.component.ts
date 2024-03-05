import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/MainComp/NavBar/navbar/navbar.component';
import { ArticlesComponent } from './components/MainComp/articles/articles.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ArticlesComponent],

  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projet_jdr';
}

