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
  titles = ["Welcome to Angular", "This is Angular"];
  title = this.titles[0]
  description = "This is a quick intro to Angular Components";
  inputText = '';


  changeTitle(){
    this.title = this.titles[1]
  }

  submitHandler() {
    console.log('clicked submitHandler')
    console.log(this.inputText)
  }
}


