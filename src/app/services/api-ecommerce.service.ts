import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEcommerceService {
​​​​​​
  constructor(private http: HttpClient) { }
  private apiRoutes: any = {​​​​​​
    articles: "https://www.eleguen.ovh/api/v1/articles",
    }

  public getArticles() : Observable<any> {
    return this.http.get(this.apiRoutes.articles)
  }

}