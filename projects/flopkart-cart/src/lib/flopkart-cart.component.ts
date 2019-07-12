import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-flopkart-cart',
  templateUrl: './flopkart-cart.component.html',
  styleUrls: ['./flopkart-cart.component.css']
})
export class FlopkartCartComponent {
  @Input() dataSource: Product[];
  constructor() { }

}
