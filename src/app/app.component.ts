import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService){}
  title = 'stanze';
  ngOnInit(): void {
    if (localStorage.getItem('TOKEN_KEY')) {
      const token = localStorage.getItem('TOKEN_KEY');
      
      if (this.auth.isAutenticated()) {
        localStorage.setItem('TOKEN_KEY',token)
        
      } else {
        localStorage.removeItem('TOKEN_KEY')
        this.auth.setError("Sessione scaduta!");
        
        
      }
      
      
      console.log(this.auth.user);
    }
  }
}
