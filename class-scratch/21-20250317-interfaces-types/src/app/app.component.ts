import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserStatusComponent } from './user-status/user-status.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, TaskListComponent, FavoriteBooksComponent, ProfileCardComponent, ShoppingCartComponent, UserStatusComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '21-20250317-interfaces-types';
}
