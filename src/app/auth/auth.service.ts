import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  private _auth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public $auth = this._auth.asObservable();
  private _error: BehaviorSubject<string> = new BehaviorSubject(null);
  public $error = this._error.asObservable();
  private _user: BehaviorSubject<string> = new BehaviorSubject(null);
  public $user = this._user.asObservable();

  signInUrl = 'http://localhost:8080/progetto_api/user/login.php';
  isAuth = false;
  isAdmin = false;
  user: User;

  login(user: any, passw: any) {
    return this.http.post(this.signInUrl, {
      username: user,
      password: passw,
    });
  }

  get tokenData(){
    let token= localStorage.getItem('TOKEN_KEY')
    if (token){
      return JSON.parse(atob(token.split(".")[1]))
    }
    return {}
  }
  isAutenticated() {
    let token= localStorage.getItem("TOKEN_KEY")
    if (!token)
      return false
    let secondToExp= (this.tokenData.exp*1000) - new Date().getTime()
    console.log(this.tokenData.exp)
    console.log(new Date().getTime())
    console.log(this.tokenData.data)
    console.log(secondToExp)
    return secondToExp > 1
  }

  logout() {
    localStorage.removeItem('TOKEN_KEY');
    this.router.navigate(['/login'])
    
  }

  

  setError(err: string) {
    this._error.next(err);
  }
}
