import { Injectable } from '@angular/core';
import { mockHeadings } from '../data/mock-headings';
import { NavigationItem } from '../model/navigation-item';

@Injectable({ providedIn: 'root' })
export class MenuHeadingService {
  selectedMenuHeading: NavigationItem;

  getMenuHeadings = (): NavigationItem[] => mockHeadings;

  selectMenuHeading(menuHeading: NavigationItem) {
    this.selectedMenuHeading = menuHeading;
  }
}
