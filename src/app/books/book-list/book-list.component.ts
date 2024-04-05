import { Component, NgZone, effect, inject, signal } from '@angular/core';
import { Book } from '../../domain/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookCountComponent } from '../book-count/book-count.component';
import { BookStore } from '../../stores/book.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCountComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  ngZone = inject(NgZone);
  router = inject(Router);
   bookStore = inject(BookStore)

  constructor() {
    effect(() => {
      const state = getState(this.bookStore);
      console.log(state.books);
    })
  }

  deleteBook(id: number) {
    this.bookStore.deleteBook(id);
  }
  
  addBook(){
    this.ngZone.run(() => {
      this.router.navigate(['/add-book']);
    });
  }
}
