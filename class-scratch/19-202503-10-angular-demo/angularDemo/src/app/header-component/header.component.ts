import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = "Welcome to Angular";
  description = "This is a quick intro to Angular Components";
  inputText = '';




  submitHandler() {
    console.log('clicked submitHandler')
    console.log(this.inputText)
  }
}


