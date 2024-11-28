import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Menu } from 'src/app/models/menu.model';
import { DatiService } from 'src/app/servizi/dati.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone:false
})
export class ToolbarComponent {
  constructor(private auth: AuthService, private dati:DatiService) { 
    dati.menuButton$.subscribe(menuB=>this.openClose=menuB)
  }
  data_oggi= new Date()
  openClose: boolean;
  menu:Menu=this.dati.menu
  username = this.auth.tokenData.data.username;
  onLogout() {
    this.auth.logout();
  }
  OpenCloseMenu() {
    this.dati.cambiaMenuButton()
  }
}
