import { Component, signal } from '@angular/core';
import { BookItemComponent } from './book-item/book-item.component';
import { Book } from '../models/book';

@Component({
  selector: 'app-favorite-books',
  imports: [BookItemComponent],
  templateUrl: './favorite-books.component.html',
  styleUrl: './favorite-books.component.css'
})
export class FavoriteBooksComponent {
 books = signal<Book[]>([
  {
  id: 'b1',
  name: "name1",
  author: "ya mum"
 },
 {
  id: 'b2',
  name: "name2",
  author: "ya dad"
 },
 {
  id: 'b3',
  name: "name2",
  author: "ya dog"
 }
 ])
}
