//angular imports
import { Component } from '@angular/core';

//component imports
import { PetMedicalComponent } from './pet-medical/pet-medical.component';

@Component({
  selector: 'app-root',
  imports: [PetMedicalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
