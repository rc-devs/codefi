import { Component, signal } from '@angular/core';
import { PetMedicalData } from './type-pet-medical';

@Component({
  selector: 'app-pet-medical',
  imports: [],
  templateUrl: './pet-medical.component.html',
  styleUrl: './pet-medical.component.css'
})
export class PetMedicalComponent {
  patientProfile = signal<PetMedicalData>( {
    nameFirst: 'Maple',
    nickname: 'Bean',
    dateLastVisit: "20241101",
    dateNextVisit: "20250501",
    medications: "proin",
    treats: true,
  })
}
