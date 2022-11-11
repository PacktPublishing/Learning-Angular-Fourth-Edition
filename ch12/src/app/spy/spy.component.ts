import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  template: '{{caption}}'
})
export class SpyComponent implements OnInit {

  caption = '';

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('My Angular app');
    this.caption = this.title.getTitle();
  }

}
