import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { DatiService } from 'src/app/servizi/dati.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  standalone:false
})
export class MenuItemComponent {

  constructor(private dati:DatiService){}

 @Input() menu:Menu = []

 activeSubMenu: Menu = [];

  openSubMenu(item: any, index:number): void {
    this.activeSubMenu = item.subMenu || [];
    this.dati.setSubMenu(this.activeSubMenu)
    this.selectedItem = index;
  }
  selectedItem: number | null = null;

}
