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
  public panier: IArticle[] = [];

  ngOnInit(): void {
    this.loadArticles();

    const stockedBasket = localStorage.getItem("panier");
    if (stockedBasket) {
      const parsedBasket = JSON.parse(stockedBasket)

      parsedBasket.map((el: IArticle) => {
        this.panier.push(el)
      })
    }
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


  addToItem(truc: IArticle) {
      this.panier.push(truc)
    localStorage.setItem("panier", JSON.stringify(this.panier)) 
  }
  
   ngOnDestroy(): void {
  }
}

