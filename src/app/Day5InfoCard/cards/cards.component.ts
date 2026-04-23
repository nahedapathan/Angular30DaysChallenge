import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent {

  cards = [
  {
    title: 'Users',
    description: 'Total registered users',
    value: '1,250',
    icon: 'people'
  },
  {
    title: 'Orders',
    description: 'Total orders placed',
    value: '320',
    icon: 'shopping_cart'
  },
  {
    title: 'Revenue',
    description: 'Total revenue generated',
    value: '₹2.5L',
    icon: 'attach_money'
  },
  {
    title: 'Feedback',
    description: 'User feedback received',
    value: '89',
    icon: 'feedback'
  }
];
}
