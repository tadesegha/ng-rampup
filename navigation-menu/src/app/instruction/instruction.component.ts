import { Component, Input } from '@angular/core';
import { NavigationItem } from '../model/navigation-item';
import { MenuHeadingService } from '../services/menu-heading.service';

@Component({
  selector: 'instruction',
  templateUrl: './instruction.component.html',
  styleUrls: [ './instruction.component.css' ]
})
export class InstructionComponent {
  constructor(private menuHeadingService: MenuHeadingService) { }

  message = () => this.menuHeadingService.selectedMenuHeading ?
    `You selected ${this.menuHeadingService.selectedMenuHeading.title}` :
    'Please click a menu item';
}
