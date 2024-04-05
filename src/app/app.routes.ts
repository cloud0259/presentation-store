import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./books/book-list/book-list.component').then(m => m.BookListComponent)
    },
    {
        path: 'add-book',
        loadComponent: () => import('./books/add-book/add-book.component').then(m => m.AddBookComponent)
    }
];
