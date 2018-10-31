import { Component, OnInit } from '@angular/core';

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

  constructor(private booksService: BooksService) { }

  ngOnInit() {
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
      if ( item.slice(0, 5) === 'price' ) {
        // console.log(this.searchBook[item]);
        // console.log(item.slice(0, 5));
        this.foundBooks = this.foundBooks.filter( item2 => {
          console.log(item2[item.slice(0, 5)]);
          // console.log(this.searchBook[item]);
          console.log(this.searchBook['priceMin'], this.searchBook['priceMax']);
          if ('priceMin' in this.searchBook && 'priceMax' in this.searchBook) {
            return ( item2[item.slice(0, 5)] >= parseInt(this.searchBook['priceMin']) && item2[item.slice(0, 5)] <= parseInt(this.searchBook['priceMax']) );
          } else if ('priceMin' in this.searchBook) {
            return item2[item.slice(0, 5)] >= parseInt(this.searchBook['priceMin']);
          } else {
            return item2[item.slice(0, 5)] <= parseInt(this.searchBook['priceMax']);
          }
        });
      } else if ( item.slice(0, 5) === 'pages' ) {
        // console.log(this.searchBook[item]);
        console.log(item.slice(0, 5));
        this.foundBooks = this.foundBooks.filter( item2 => {
          console.log(item2[item.slice(0, 5)]);
          // console.log(this.searchBook[item]);
          console.log(this.searchBook['pagesMin'], this.searchBook['pagesMax']);
          if ('pagesMin' in this.searchBook && 'pagesMax' in this.searchBook) {
            return ( item2[item.slice(0, 5)] >= parseInt(this.searchBook['pagesMin']) && item2[item.slice(0, 5)] <= parseInt(this.searchBook['pagesMax']) );
          } else if ('pagesMin' in this.searchBook) {
            return item2[item.slice(0, 5)] >= parseInt(this.searchBook['pagesMin']);
          } else {
            return item2[item.slice(0, 5)] <= parseInt(this.searchBook['pagesMax']);
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

}
