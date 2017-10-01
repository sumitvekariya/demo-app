
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  article: Article[];
  @ViewChild('newTitle') titleInputRef: ElementRef;
  @ViewChild('newLink') linkInputRef: ElementRef;
  newPoint = 0;
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
  }

  onSubmit() {
    const ingTitle = this.titleInputRef.nativeElement.value;
    const ingLink = this.linkInputRef.nativeElement.value;
    const newArticle = new Article(ingTitle, ingLink, this.newPoint);
    this.articleservice.addArticle(newArticle);
  }



}
