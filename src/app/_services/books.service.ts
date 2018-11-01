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

  setData(item: object): Observable<any> {
    let requestUrl: string = `${this.baseUrl}book`;
    let headers: any = null;
    let params = new HttpParams()
      .set('author', 'Nikita')
      .set('title', 'Nikita')
      .set('description', 'Nikita')
      .set('isbn', '1111111111111')
      .set('pages', '100')
      .set('price', '122')
      .set('id', '5')
      .set('formatId', '3')
      .set('countryId', '1')
      .set('companyId', '1')
    /*for (let key in item) {
      params.set(key.toString(), item[key].toString());
    }*/
    console.log(params);
    if (this.token) { headers = new HttpHeaders().set('x-auth-token', `${this.token}`) }
    return this.http.get(requestUrl, {params, headers, observe: 'response'});
  }

  sendData(book: object, bookId: number): Observable<any> {
    let requestUrl: string = `${this.baseUrl}books`;
    let headers: any = null;
    if (this.token) { 
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': this.token
      });
    }
    let options = {headers: headers};
    book['id'] = bookId;
    return this.http.post(requestUrl, JSON.stringify(book), options);
  }

  log(item: any): void {
    console.log(item);
  }

}
