import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() dataAdded = new EventEmitter<{title: string, link: string}>();
  newTitle = '';
  newLink = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.dataAdded.emit({
      title: this.newTitle,
      link: this.newLink
    });
  }

}
