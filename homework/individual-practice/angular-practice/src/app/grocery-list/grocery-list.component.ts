import { Component, signal } from '@angular/core';
import { GroceryItem, GroceryList } from './data-grocery-item';


@Component({
  selector: 'app-grocery-list',
  imports: [],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList = signal<GroceryList[]>([{
    itemName: '',
    buyQty: 0,
  }]);


  pantryInventory = signal<GroceryItem[]>([{
    id: 'i1',
    name: 'Potato',
    currentQty: 0,
    requiredQty: 10,
    },
  {
    id: 'i2',
    name: 'Onion',
    currentQty: 2,
    requiredQty: 2,
  },
  {
    id: 'i3',
    name: 'Garlic',
    currentQty: 5,
    requiredQty: 4,
  },
  {
    id: 'i4',
    name: 'Canned Tomatoes',
    currentQty: 4,
    requiredQty: 20,
  },
  {
    id: 'i5',
    name: 'Lentils',
    currentQty: 0,
    requiredQty: 4,
  },
  {
    id: 'i6',
    name: 'Rice',
    currentQty: 1,
    requiredQty: 1,
  },
  {
    id: 'i7',
    name: 'Canned Chickpeas',
    currentQty: 0,
    requiredQty: 2,
  },
  {
    id: 'i8',
    name: 'Coconut Milk',
    currentQty: 0,
    requiredQty: 1,
  },])

  calculateShortage(currentQty:number, requiredQty:number){
    let shortage = requiredQty - currentQty;

    if (shortage <= 0){
      shortage = 0;
    }

      return shortage;
  }

  addToList(itemName:string, shortage:number){
    let newItem = {
      itemName: itemName,
      buyQty: shortage,
    };

    this.groceryList().push(newItem)
    alert(`${shortage} ${itemName} added to your Grocery List!`)
   }

   removeFromList(itemName:string){
    let index = this.groceryList().findIndex(object => object.itemName === itemName)
    this.groceryList().splice(index, 1)

    alert(`${itemName} was removed from your Grocery List.`)
   }
}
