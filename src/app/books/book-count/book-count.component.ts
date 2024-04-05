import { Component, Signal, computed, effect, inject, input, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookStore } from '../../stores/book.store';

@Component({
  selector: 'app-book-count',
  standalone: true,
  imports: [],
  templateUrl: './book-count.component.html',
  styleUrl: './book-count.component.scss'
})
export class BookCountComponent { 
  bookCount = input.required<number>();
  //bookStore = inject(BookStore);

  constructor(){
    effect(() => {
      console.log(this.bookCount());
    })
  }
}
