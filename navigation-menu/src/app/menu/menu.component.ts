import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../model/navigation-item';
import { MenuHeadingService } from '../services/menu-heading.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  navigationItems: NavigationItem[];

  constructor(private menuHeadingService: MenuHeadingService) { }

  ngOnInit(): void {
    this.navigationItems = this.menuHeadingService.getMenuHeadings();
  }

  navItemClicked(navigationItem: NavigationItem): void {
    this.menuHeadingService.selectMenuHeading(navigationItem);
  }
}
