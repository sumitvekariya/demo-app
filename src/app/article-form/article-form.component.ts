import { NgForm } from '@angular/forms/src/directives';

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article[];
  newPoint = 0;
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newArticle = new Article(value.title, value.link, this.newPoint);
    this.articleservice.addArticle(newArticle);
  }

}
