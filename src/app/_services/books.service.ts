import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BooksService {
  private token = 'bad18eba1ff45jk7858b8ae88a77fa30';
  private baseUrl = 'http://localhost:3004/';

  constructor(
    private http: HttpClient
  ) { }

  getData(item: string): Observable<any> {
    let requestUrl: string;
    let headers: any = null;
    let params = new HttpParams()
      .set('per_page', '10')
      .set('page', '1');
    if (this.token) { headers = new HttpHeaders().set('x-auth-token', `${this.token}`) }
    requestUrl = `${this.baseUrl}${item}`;
    return this.http.get(requestUrl, {params, headers, observe: 'response'});
  }

  log(item: any): void {
    console.log(item);
  }

  test1(item: string): void {
    console.log(item);
  }
}
