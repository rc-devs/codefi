export interface GroceryItem {
  id: string,
  name: string,
  currentQty: number,
  requiredQty: number,
}

export interface GroceryList {
  name: string,
  buyQty: number;
}
