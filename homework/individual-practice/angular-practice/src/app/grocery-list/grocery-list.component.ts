import { Component, signal } from '@angular/core';
import { GroceryItem } from './data-grocery-item';

@Component({
  selector: 'app-grocery-list',
  imports: [],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList = signal<GroceryItem[]>([{
    id: 'i1',
    name: 'Potato',
    currentQty: 0,
    requiredQty: 10,
    buyQty: 0,
    },
  {
    id: 'i2',
    name: 'Onion',
    currentQty: 2,
    requiredQty: 2,
    buyQty: 0,
  },
  {
    id: 'i3',
    name: 'Garlic',
    currentQty: 5,
    requiredQty: 4,
    buyQty: 0,
  },
  {
    id: 'i4',
    name: 'Canned Tomatoes',
    currentQty: 4,
    requiredQty: 20,
    buyQty: 0,
  },
  {
    id: 'i5',
    name: 'Lentils',
    currentQty: 0,
    requiredQty: 4,
    buyQty: 0,
  },
  {
    id: 'i6',
    name: 'Rice',
    currentQty: 1,
    requiredQty: 1,
    buyQty: 0,
  },
  {
    id: 'i7',
    name: 'Canned Chickpeas',
    currentQty: 0,
    requiredQty: 2,
    buyQty: 0,
  },
  {
    id: 'i8',
    name: 'Coconut Milk',
    currentQty: 0,
    requiredQty: 1,
    buyQty: 0,
  },])
}
