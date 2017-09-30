import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataElements = [];
  onDataAdded(simpleData: {title: string, link: string}) {
    this.dataElements.push({
      title: simpleData.title,
      link: simpleData.link
    });
  }

}
