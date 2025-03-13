import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  celcius: number = 0;
  fahrenheit: number = 0

  onConvert(){
    this.fahrenheit = (this.celcius * 9/5) + 32;
  }
}
