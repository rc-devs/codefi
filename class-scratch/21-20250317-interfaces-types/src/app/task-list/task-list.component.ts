import { Component, signal } from '@angular/core';
import { Task } from '../models/task';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
 tasks = signal<Task[]>([
  {
    id: 't1',
    name: 'make bed'
  },
  {
    id: 't2',
    name: 'wash dishes'
  }
])
}
