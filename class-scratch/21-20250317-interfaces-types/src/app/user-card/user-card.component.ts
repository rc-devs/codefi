import { Component, signal } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
 user = signal<User>({
  id: 'u1',
  name: 'Travis',
  avatar: './path/for/image',
 })
}
