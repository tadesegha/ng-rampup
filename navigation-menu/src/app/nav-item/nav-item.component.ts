import { Component, Input } from '@angular/core';
import { NavigationItem } from '../model/navigation-item';

@Component({
  selector: 'navItem',
  templateUrl: './nav-item.component.html',
  styleUrls: [ './nav-item.component.css' ]
})
export class NavItemComponent {
  @Input()
  item: NavigationItem
}
