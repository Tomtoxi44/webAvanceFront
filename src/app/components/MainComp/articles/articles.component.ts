import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IArticle } from '../../../interface/iarticle';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgIf],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent{
  @Input() truc!: IArticle;
  @Input() afficherBouton: boolean = true;
  @Output() addToItemClick = new EventEmitter<IArticle>();

  addToItem(){
    this.addToItemClick.emit(this.truc);
  }

}

