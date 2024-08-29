import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

LoginUrl = 'http://localhost:3000/login';

private isLocalStorageAvailable = typeof localStorage !=='undefined';
constructor(private http:HttpClient,private router:Router) {
    if(this.isLocalStorageAvailable){
      const token = localStorage.getItem('accessToken');
      if(token){
        this.tokenSubject.next(token);
      }
      else{
        this.tokenSubject.next(null);
      }

   }
}

private tokenSubject : BehaviorSubject <string | null> = new BehaviorSubject<string | null>(null);

// isTokenExpired(token: string): boolean {
//   try {
//     const decodedToken: any = jwtDecode(token);
//     const expiry = decodedToken.exp * 1000;
//     return Date.now() >= expiry;
//   } catch (error) {
//     return true;
//   }
// }




login(username: FormControl, password: FormControl): Observable<any> {
  return this.http.post<any>(this.LoginUrl,{
    "username": username,
    "password": password
  }).pipe(
    tap(response => {
      const token = response.token;
      console.log(response);
      console.log(token);
      if (token) {
        localStorage.setItem('accessToken', token);
        this.tokenSubject.next(token);
        console.log(token);
      } else {
        console.log('No token from the server');
      }
    })
  );
}


getToken():Observable<string | null>
{
  return this.tokenSubject.asObservable();
}


getDecodedToken():any{
  const token = this.tokenSubject.value;
  if(token){
    return jwtDecode(token);
  }
  return null
}

isAuthenticated(): boolean {
  const token = localStorage.getItem('accessToken');
  return token !== null;
}
logOut():void{
  localStorage.removeItem('accessToken');
  this.tokenSubject.next(null);
  this.router.navigate(['/login'])
}


}
