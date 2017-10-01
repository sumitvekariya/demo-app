import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() element: {title: string, link: string, point: number};
  constructor() { }

  ngOnInit() {
  }

  onUpVote() {
    this.element.point = this.element.point + 1;
  }

  onDownVote() {
    this.element.point = this.element.point - 1;
  }

  externalLink() {
    window.location.href = './' + this.element.link;
  }

}
