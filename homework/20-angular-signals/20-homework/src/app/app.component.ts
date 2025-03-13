import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { TaskListComponent } from './task-list/task-list.component';
import { FavColorComponent } from './fav-color/fav-color.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, TaskListComponent, FavColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20-homework';
}
