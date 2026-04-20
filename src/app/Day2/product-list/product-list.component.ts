import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [
  { id: 1, name: 'Laptop', price: 75000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', rating: 4.5 },
  { id: 2, name: 'Phone', price: 30000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', rating: 4.2 },
  { id: 3, name: 'Headphones', price: 2000, image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd', rating: 4.0 },
  { id: 4, name: 'Smart Watch', price: 5000, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b', rating: 4.3 },
  { id: 5, name: 'Camera', price: 45000, image: 'https://images.unsplash.com/photo-1519183071298-a2962be96a7b', rating: 4.6 },
  { id: 6, name: 'Tablet', price: 25000, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04', rating: 4.1 },
  { id: 7, name: 'Keyboard', price: 1500, image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f', rating: 3.9 },
  { id: 8, name: 'Mouse', price: 800, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3', rating: 4.0 },
  { id: 9, name: 'Speaker', price: 3500, image: 'https://images.unsplash.com/photo-1585386959984-a41552262f3b', rating: 4.4 },
  { id: 10, name: 'Monitor', price: 12000, image: 'https://images.unsplash.com/photo-1527443224154-c4b62b9f0e7c', rating: 4.5 }
];
}
