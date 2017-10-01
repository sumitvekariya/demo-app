import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataElements = [{ title: 'TypeScript', link: 'www.typescriptlang.org', point: 10 },
                  { title: 'Angular Homepage', link: 'angular.io', point: 6 },
                  { title: 'Angular 2', link: 'angular.io', point: 3 },
                  { title: 'FullStack', link: 'fullstack.io', point: 2 }];
  onDataAdded(simpleData: {title: string, link: string, point: number}) {
    this.dataElements.push({
      title: simpleData.title,
      link: simpleData.link,
      point: simpleData.point
    });
  }

  // onUpVote() {
  //   this.dataElements.point = this.dataElements.point + 1;
  // }

  // onDownVote() {
  //   this.dataElements.point = this.dataElements.point - 1;
  // }

}
