import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class ArticleService {

  article: Article[] = [
    new Article('TypeScript', 'www.typescriptlang.org', 10),
    new Article('TypeScript', 'www.typescriptlang.org', 10),
    new Article('TypeScript', 'www.typescriptlang.org', 10),
    new Article('TypeScript', 'www.typescriptlang.org', 10)
  ];

  getArticles() {
    return this.article;
  }

  addArticle(article: Article) {
    this.article.push(article);
  }


  constructor() { }

}
