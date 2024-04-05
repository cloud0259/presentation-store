import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Book, CreateBook } from "../domain/book";
import { BookService } from "../services/book.service";
import { computed, inject } from "@angular/core";


export type BookState = {
    books: Book[];
    isLoading: boolean;
};

export const initialState: BookState = {
    books: [],
    isLoading: false,
};

export const BookStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withComputed(({books}) => ({
        bookLength : computed(() =>  books().length)
    })) ,
    withMethods((store, bookService = inject(BookService)) => ({
        getBooks() {
            patchState(store, {isLoading: true})
            const books = bookService.getBooks();
            patchState(store, {books: [...books], isLoading: false});
        },
        addBook(book: CreateBook) {
            patchState(store, {isLoading: true})
            const newBook = bookService.addBook(book); 
            const t = {books: [...store.books(), newBook]};
            patchState(store,{...t} );
            patchState(store, {isLoading: false})    
        },        

        deleteBook(id: number) {
            bookService.deleteBook(id);
            patchState(store, {books: store.books().filter(book => book.id !== id)});
        }
    })),
    withHooks({ onInit: (store) => store.getBooks() })
)