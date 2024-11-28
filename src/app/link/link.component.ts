import { Component, OnInit, Input, NgModule, HostBinding } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html'
})
export class LinkComponent {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() link: Link = undefined!;

  constructor() {
  }

  ngOnInit() {
  }
}
