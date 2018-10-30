import { Component, OnInit } from '@angular/core';

import { BooksService } from '../_services/books.service';

@Component({
  selector: 'app-showcase',
  providers: [BooksService],
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {
  public books: object[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.test1('test for service connection');
    this.booksService.getData('books').subscribe( answer => {
      this.books = answer.body;
    }, error => {
      console.log(error);
    });

    this.booksService.getData('formats').subscribe( answer => {
      console.log(answer);
    }, error => {
      console.log(error);
    });

    this.booksService.getData('countries').subscribe( answer => {
      console.log(answer);
    }, error => {
      console.log(error);
    });

    this.booksService.getData('cities').subscribe( answer => {
      console.log(answer);
    }, error => {
      console.log(error);
    });

    this.booksService.getData('companies').subscribe( answer => {
      console.log(answer);
    }, error => {
      console.log(error);
    });
  }

}
