import { strictEqual } from 'assert';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  article: Article[];

  abc = 'point';
  // new Article {title: 'string', link: 'string', point: 'number'};
 // @Input() element: {title: string, link: string, point: number};
  constructor(private articleservice: ArticleService) {  }

  ngOnInit() {
    this.article = this.articleservice.getArticles();
  }






  // externalLink() {
  //   window.location.href = './' + this.element.link;
  // }

}
