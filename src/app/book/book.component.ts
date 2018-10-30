import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../_services/books.service';

@Component({
  selector: 'app-book',
  providers: [BooksService],
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  public books: object[];
  public currentBookId: string;
  public currentBook: object = {};

  /*public selectedFormat: object;
  public selectedCountry: object;
  public selectedCity: object;
  public selectedCompany: object;*/

  public dataLists: object = {};

  constructor(
    private route: ActivatedRoute, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.currentBookId = this.route.snapshot.paramMap.get('id');
    this.prepareDataLists();
    if (this.currentBookId) {
      this.booksService.getData('books').subscribe( answer => {
        this.books = answer.body;
        this.showBookInfo();
      }, error => {
        console.log(error);
      });
    }
  }

  showBookInfo(): void {
    this.currentBook = this.books.filter(item => {
      return item['id'] == this.currentBookId;
    })[0];
    console.log('currentBook -> ', this.currentBook);
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

}
