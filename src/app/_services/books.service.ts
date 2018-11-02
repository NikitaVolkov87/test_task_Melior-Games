import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Books } from '../_interfaces/interfaces';

const httpOptions: any = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-auth-token': 'bad18eba1ff45jk7858b8ae88a77fa30' })
};

@Injectable()
export class BooksService {
  private baseUrl: string = 'http://localhost:3004/';

  constructor(
    private http: HttpClient
  ) { }

  getData(item: string): Observable<any> {
    let requestUrl: string = `${this.baseUrl}${item}`;
    let headers: any = httpOptions.headers;
    return this.http.get(requestUrl, {headers, observe: 'response'});
  }

  sendData(book: Books, bookId: number): Observable<any> {
    let requestUrl: string = `${this.baseUrl}books`;
    book['id'] = bookId;
    return this.http.post(requestUrl, JSON.stringify(book), httpOptions);
  }

  log(item: any): void {
    console.log(item);
  }

}
