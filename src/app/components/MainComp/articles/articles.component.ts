import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { IArticle } from '../../../interface/iarticle';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgFor],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent{
  @Input() truc!: IArticle  
}

