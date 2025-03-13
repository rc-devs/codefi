import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = ['Coding Homework', 'Do some stuff', 'Other stuff']
  newTask = '';

  updateList(){
    this.tasks.update(this.newTask)
  }
}
