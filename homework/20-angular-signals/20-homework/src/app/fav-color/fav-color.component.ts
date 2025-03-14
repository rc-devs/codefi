import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fav-color',
  imports: [FormsModule,],
  templateUrl: './fav-color.component.html',
  styleUrl: './fav-color.component.css'
})
export class FavColorComponent {
  colors = signal( ['Red', 'Green', 'Blue'])
  newColor = '';

  updateColors(){
    this.colors.update((colors)=> [...colors, this.newColor])
    this.newColor = ''; 
  }
}
