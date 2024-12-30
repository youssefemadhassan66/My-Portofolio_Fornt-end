import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  private pageParam: string = 'home';

  constructor(private http: HttpClient) {}

  setPageParam(Page: string): void {
    this.pageParam = Page;
  }

  getData(): Observable<any> {
    // https://web-production-3fac9.up.railway.app/${this.pageParam}
    //http://localhost:3000/${this.pageParam}
    const GETpageUrl = `https://web-production-3fac9.up.railway.app/${this.pageParam}`;
    return this.http.get(GETpageUrl);
  }

  submitForm(formData: FormData): Observable<any> {
    const POSTpageUrl = `https://web-production-3fac9.up.railway.app/${this.pageParam}`;
    return this.http.post(POSTpageUrl, formData);
  }

  submitMessage(formData: any): Observable<any>{
    const POSTpageUrl = `https://web-production-3fac9.up.railway.app/${this.pageParam}`;
    return this.http.post(POSTpageUrl, formData);
  }

}
