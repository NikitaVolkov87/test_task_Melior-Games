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

  private paramsSubscription: any;

  constructor(
    private booksService: BooksService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.booksService.getData('books').subscribe( answer => {
      this.books = answer.body;
      // this.books.forEach( item => item['show'] = false );
      this.getUrlParams();
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
    this.setUrlParams();
    for (const item in this.searchBook) {
      if ( !this.searchBook[item] ) {
        delete this.searchBook[item];
        // this.searchBook[item] = null;
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

  getUrlParams(): void {
    if (Object.keys(this.route.snapshot.queryParams).length !== 0) {
      this.paramsSubscription = this.route.snapshot.queryParams;
      for (const item in this.paramsSubscription) {
        if (item === 'formatId') {
          this.searchBook[item] = parseInt(this.paramsSubscription[item]);
        } else {
          this.searchBook[item] = this.paramsSubscription[item];
        }
      }
      this.filterBooks();
    }
  }

  setUrlParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.searchBook,
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }

}
