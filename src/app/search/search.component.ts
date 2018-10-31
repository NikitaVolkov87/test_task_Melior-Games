import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from '../_services/books.service';

@Component({
  selector: 'app-search',
  providers: [BooksService],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public books: object[];
  
  public foundBooks: object[] = [];
  public searchBook: object = {};
  public dataLists: object = {};

  public href: string = "";

  constructor(
    private booksService: BooksService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.handleUrl();
    this.booksService.getData('books').subscribe( answer => {
      this.books = answer.body;
      this.books.forEach( item => item['show'] = false );
    }, error => {
      console.log(error);
    });
    this.prepareDataLists();
  }

  prepareDataLists(): void {
    const lists: string[] = ['formats', 'countries', 'cities', 'companies'];
    lists.forEach( item => {
      this.booksService.getData(item).subscribe( answer => {
        this.dataLists[item] = answer.body;
      }, error => {
        console.log(error);
      });
    })
  }

  filterBooks(): void {
    this.foundBooks = this.books;
    for (const item in this.searchBook) {
      if ( !this.searchBook[item] ) {
        delete this.searchBook[item];
        continue;
      }
      if ( item.slice(0, 5) === 'price' || item.slice(0, 5) === 'pages' ) {
        this.foundBooks = this.foundBooks.filter( item2 => {
          if (item.slice(0, 5)+'Min' in this.searchBook && item.slice(0, 5)+'Max' in this.searchBook) {
            return ( item2[item.slice(0, 5)] >= parseInt(this.searchBook[item.slice(0, 5)+'Min']) && item2[item.slice(0, 5)] <= parseInt(this.searchBook[item.slice(0, 5)+'Max']) );
          } else if ( item.slice(0, 5)+'Min' in this.searchBook ) {
            return item2[item.slice(0, 5)] >= parseInt(this.searchBook[item.slice(0, 5)+'Min']);
          } else {
            return item2[item.slice(0, 5)] <= parseInt(this.searchBook[item.slice(0, 5)+'Max']);
          }
        });
      } else {
        this.foundBooks = this.foundBooks.filter( item2 => {
          return item2[item].toString().indexOf(this.searchBook[item]) !== -1 ;
        });
      }
    }
    if ( Object.keys(this.searchBook).length === 0 ) {
      this.foundBooks = [];
    }
  }

  handleUrl(): void {
    /*this.href = this.router.url;
    console.log(this.router.url);*/
      // let author = params['author'];
    console.log('url params ->', this.route.snapshot.queryParams);
  }

}
