import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calculator',
  imports: [FormsModule],
  templateUrl: './simple-calculator.component.html',
  styleUrl: './simple-calculator.component.css'
})
export class SimpleCalculatorComponent {
  input1:number = 0;
  input2:number = 0;
  answer = 0;

  //i know this is fucky
  onSubract(){
    this.answer = this.input1 - this.input2;
  };
  onAdd(){
    this.answer = Number(this.input1) + Number(this.input2);
  };
  onMultiply(){
    this.answer = this.input1 * this.input2;
  };
  onDivide(){
    this.answer = this.input1 / this.input2;
  }
}
