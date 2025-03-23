import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Favo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '21-interfaces-types';
}
