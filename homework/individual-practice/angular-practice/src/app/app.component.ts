//angular imports
import { Component } from '@angular/core';

//component imports
import { PetMedicalComponent } from './pet-medical/pet-medical.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@Component({
  selector: 'app-root',
  imports: [PetMedicalComponent, GroceryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
