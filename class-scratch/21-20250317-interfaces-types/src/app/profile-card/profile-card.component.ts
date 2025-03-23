import { Component, signal } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  user = signal<User>(
    {
      id: 'u1',
      name: 'Travis',
      avatar: '/image/path'
    }
  );
  isLoggedIn = signal<boolean>(true);

}
