import { NgForm } from '@angular/forms/src/directives';

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
