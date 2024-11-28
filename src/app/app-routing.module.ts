import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pagine/login/login.component';
import { HomeComponent } from './pagine/home/home.component';
import { guardGuard } from './auth/guard.guard';
import { PageNotFoundComponent } from './pagine/page-not-found/page-not-found.component';
import { UtentiStanzeComponent } from './pagine/utenti-stanze/utenti-stanze.component';
import { UtentiComponent } from './pagine/utenti/utenti.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [guardGuard],
    component: HomeComponent,
    children: [
      {
        path: 'utenti-stanze',
        component: UtentiStanzeComponent,
      },
      {
        path: 'utenti',
        component: UtentiComponent
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
