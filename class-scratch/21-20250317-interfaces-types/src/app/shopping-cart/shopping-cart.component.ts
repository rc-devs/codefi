import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  items = signal<string[]>(
    [
      'shoes',
      'socks',
      'pants',
    ]
  )

  handleDelete(item: string){
   // this.items.splice(0, 1)
   console.log('handleDelete runs')
   this.items.update(items => items.filter(i => i !== item))
   //this.items.update()
  }
}
