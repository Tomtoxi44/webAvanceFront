import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../interface/iarticle';
import { NgFor } from '@angular/common';
import { ArticlesComponent } from '../../components/MainComp/articles/articles.component';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgFor, ArticlesComponent],
  templateUrl: './panier.component.html',
})
export class PanierComponent implements OnInit {
  panierItems: IArticle[] = [];

  ngOnInit(): void {
    this.loadPanier();
  }

  loadPanier(){
    const item = localStorage.getItem("panier")
    if (item){
      this.panierItems = JSON.parse(item);
    }
  }
}
