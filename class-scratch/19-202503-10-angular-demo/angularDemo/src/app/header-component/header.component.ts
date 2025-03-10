import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponentComponent {
  title = "Welcome to Angular";
  description = "This is a quick intro to Angular Components";
  inputText = '';
}
