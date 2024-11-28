import { Component } from '@angular/core';

import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public links: Link[];

  constructor(){
    this.links = [
      new Link('Google', 'http://google.com', 100),
      new Link('Angular', 'http://angular.io', 100),
      new Link('Youtube', 'http://youtube.com', 100)
    ]
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
