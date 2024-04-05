import { Component, NgZone, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../domain/book';
import { BookStore } from '../../stores/book.store';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  form!: FormGroup;

  fb = inject(FormBuilder);
  ngZone = inject(NgZone);
  router = inject(Router);

   bookStore = inject(BookStore);
  constructor() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      title: '',
      author: '',
      description: '',
    });
  }

  addBook() {
    if (!this.form.valid) {
      return;
    }

    const book = this.form.value as Book;
    //this.bookservice.addBook(book);
    this.bookStore.addBook(book);
    this.ngZone.run(() => {
      this.router.navigate(['/']);
    });
  }
}
