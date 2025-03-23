import { Component, input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
 book = input<Book>()
}
