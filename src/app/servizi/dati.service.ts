import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu, MenuItem } from '../models/menu.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatiService {
  constructor(private http: HttpClient) {}

  private _menuButton: BehaviorSubject<boolean> = new BehaviorSubject(false);
  menuButton$ = this._menuButton.asObservable();
  private _sottoMenu: BehaviorSubject<Menu> = new BehaviorSubject(null);
  sottoMenu$ = this._sottoMenu.asObservable();

  private urlStanze = 'http://localhost:8081/progetto_api/stanze/read.php';
  getStanze() {
    return this.http.get(this.urlStanze);
  }

  cambiaMenuButton() {
    this._menuButton.next(!this._menuButton.getValue());
  }
  setSubMenu(sottoMenu:Menu) {
    this._sottoMenu.next(sottoMenu);
  }

  menu: Menu = [
    {
      title: 'Amministrazione',
      icon: 'bar_chart',
      color: '#ff7f0e',
      expanded:false,
      subMenu: [
        {
          title: 'Utenti',
          icon: 'account_box',
          link: '/home/utenti',
          color: '#ff7f0e',
        },
        {
          title: 'Stanze',
          icon: 'people',
          color: '#ff7f0e',
          link: '/home/utenti-stanze',
        },
      ],
    },
    {
      title: 'Stadio',
      icon: 'account_box',
      link: '/home/stadio',
      color: '#ff7f0e',
      expanded:false,
    },
    {
      title: 'Casa',
      icon: 'account_box',
      link: '/home/casa',
      color: '#ff7f0e',
      expanded:false,
    },
  ];
}
