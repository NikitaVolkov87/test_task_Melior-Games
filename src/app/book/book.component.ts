import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.currentBookId = this.route.snapshot.paramMap.get('id');
    this.prepareDataLists();
    this.booksService.getData('books').subscribe( answer => {
      this.books = answer.body;
      if (this.currentBookId) {
        this.showBookInfo();
      }
    }, error => {
      console.log(error);
    });
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

  onSubmit(formValid: boolean): void {
    if (formValid) {
      const bookId: number = this.books.length + 1;
      this.booksService.sendData(this.currentBook, bookId).subscribe( answer => {
        console.log(answer);
        this.router.navigate(['/showcase']);
      }, error => {
        console.log(error);
      });
    }
  }

}
