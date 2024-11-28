import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAutenticated()) {
    return true
  } else {
    return inject(Router).createUrlTree(['/login']);
  }
};
