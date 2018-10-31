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
      this.foundBooks = this.foundBooks.filter( item2 => {
        return item2[item].indexOf(this.searchBook[item]) !== -1 ;
      });
    }
    if ( Object.keys(this.searchBook).length === 0 ) {
      this.foundBooks = [];
    }
  }

}
