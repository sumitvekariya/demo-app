import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  article: Article[];
  abc = 'point';

  // new Article {title: 'string', link: 'string', point: 'number'};
  // @Input() element: {title: string, link: string, point: number};
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.article = this.articleservice.getArticles();
  }

  onUpVote(articles: Article) {
    articles.point = articles.point + 1;
  }
  onDownVote(articles: Article) {
    articles.point = articles.point - 1;
  }

}
