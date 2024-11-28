import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu, MenuItem } from 'src/app/models/menu.model';
import { DatiService } from 'src/app/servizi/dati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:false
})
export class HomeComponent {
  constructor(private dati: DatiService) {
    dati.menuButton$.subscribe((menuB) => (this.opened = menuB));
    dati.sottoMenu$.subscribe((subMenu)=>(this.activeSubMenu=subMenu))
  }
  routes = RouterModule;
  opened: boolean;
  
  activeSubMenu: Menu=[];
   

  

 /*  chiudiMenu() {
    this.dati.cambiaMenuButton()
  } */

  menu:Menu=this.dati.menu
}
