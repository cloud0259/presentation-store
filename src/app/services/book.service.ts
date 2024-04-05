import { Injectable } from '@angular/core';
import { Book, CreateBook } from '../domain/book';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [    
      { id: 1, description: "Harry Potter et la Chambre des Secrets suit Harry lors de sa deuxième année à Poudlard, où un mystérieux mal rôde dans les couloirs de l'école.", title: 'Harry Potter et la chambre des secrets', author: 'JK Rowling'},
      { id: 2, description: '"Voyage au centre de la Terre" de Jules Verne entraîne le lecteur dans une aventure audacieuse et captivante à travers les profondeurs de notre planète.', title: 'Voyage au centre de la terre', author: 'Jules Verne'},
      { id: 3, description: '"Eragon" emmène les lecteurs dans un univers de fantasy palpitant où un jeune fermier découvre un œuf de dragon, déclenchant une quête héroïque pour sauver son peuple de l\'oppression.', title: 'Eragon', author: 'Christopher Paolini'}
  ];
  getBooks() {
      return this.books;
  }

  addBook(book: CreateBook) {
      let id = Math.max(...this.books.map(b => b.id));

      if (isFinite(id) && id !== -Infinity) {
          id = id + 1;
        } else {
            id = 0;
        }
      let newBook = { ...book, id };

      this.books.push(newBook);

      return newBook;
  }

  deleteBook(id: number) {
      this.books = this.books.filter(book => book.id !== id);
  }
}