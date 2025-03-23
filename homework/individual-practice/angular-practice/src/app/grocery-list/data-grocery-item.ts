export interface GroceryItem {
  id: string,
  name: string,
  currentQty: number,
  requiredQty: number,
}

export interface GroceryList {
  itemName: string,
  buyQty: number;
}
