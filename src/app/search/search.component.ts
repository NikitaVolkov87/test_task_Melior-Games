import { Component, OnInit } from '@angular/core';

import { BooksService } from '../_services/books.service';

@Component({
  selector: 'app-search',
  providers: [BooksService],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public books: object[];

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

  filterBooks(field: string, text: [string, number]): void {
    /*const searchText = text;//.toString().toLowerCase();
    console.log(field, searchText);
    if ( !text ) {
      this.books.forEach( item => item['show'] = false );
    } else {
      this.books.forEach( item => {
        console.log(item[field].toString().indexOf(searchText));
        if ( item[field].toString().indexOf(searchText) !== -1 ) {
          item['show'] = true;
        } else {
          item['show'] = false;
        }
      });
    }*/
    if ( !text ) {
      this.books.forEach( item => item['show'] = false );
      delete this.searchBook[field];
    } else {
      this.books.forEach( item => {
        for (const item2 in this.searchBook ) {
          console.log(item[item2], this.searchBook[item2]);
          if ( item[item2].indexOf(this.searchBook[item2]) !== -1 ) {
            item['show'] = true;
          } else {
            // item['show'] = false;
          }
        }
      });
    }
  }
}
