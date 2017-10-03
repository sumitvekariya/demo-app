import { Injectable } from '@angular/core';
import { Article } from './article.model';


@Injectable()
export class ArticleService {

  article: Article[] = [
    new Article('TypeScript', 'http://www.typescriptlang.org', 10),
    new Article('Angular Homepage', 'http://www.angular.io', 6),
    new Article('Angular 2', 'http://www.angular.io', 3),
    new Article('FullStack', 'http://www.fullstack.io', 2)
  ];


  getArticles() {
    return this.article;
  }

  addArticle(article: Article) {
    this.article.push(article);
  }


  constructor() { }

}
