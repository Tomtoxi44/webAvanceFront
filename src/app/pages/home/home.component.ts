import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesComponent } from '../../components/MainComp/articles/articles.component';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { NgFor } from '@angular/common';
import { IArticle } from '../../interface/iarticle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ArticlesComponent, NgFor],
  templateUrl: './home.component.html',

})
export class HomeComponent  implements OnInit, OnDestroy {
  constructor(private servicesService: ApiEcommerceService) { }

  public articles: IArticle[] = [];

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.servicesService.getArticles().subscribe(

      {
        next: (data) => {
          this.articles = data
          console.log("Articles :", data);
        },
        error: (err) => {
          console.error("Erreur lors du chargement des articles :", err);
        }
      }
    )
  }
  ngOnDestroy(): void {
  }
}

