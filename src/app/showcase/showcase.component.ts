import { Component, OnInit } from '@angular/core';

import { BooksService } from '../_services/books.service';
import { Books } from '../_interfaces/interfaces';

@Component({
  selector: 'app-showcase',
  providers: [BooksService],
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {
  public books: Books[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getData('books').subscribe( answer => {
      this.books = answer.body;
    }, error => {
      console.log(error);
    });
  }

}
