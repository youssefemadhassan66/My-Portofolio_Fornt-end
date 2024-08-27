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
    console.log(this.pageParam);
  }

  getData(): Observable<any> {
    const GETpageUrl = `http://localhost:3000/${this.pageParam}`;
    return this.http.get(GETpageUrl);
  }

  submitForm(formData: FormData): Observable<any> {
    const POSTpageUrl = `http://localhost:3000/dashboard/${this.pageParam}`;
    return this.http.post(POSTpageUrl, formData);
  }
}
