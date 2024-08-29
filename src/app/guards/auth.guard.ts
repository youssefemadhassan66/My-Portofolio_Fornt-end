import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = Inject(AuthService);
  const router = Inject(Router);

  const token = localStorage.getItem('accessToken');

  if (token) {
    return true;
  } else {
    authService.logOut();
    router.navigate(['/login']);
    return false;
  }
};
