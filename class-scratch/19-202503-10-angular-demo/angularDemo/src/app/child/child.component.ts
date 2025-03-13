import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [NgModel],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  input
}
