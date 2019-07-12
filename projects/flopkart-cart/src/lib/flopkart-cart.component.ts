import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'flopkart-cart',
  templateUrl: './flopkart-cart.component.html',
  styleUrls: ['./flopkart-cart.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FlopkartCartComponent {
  @Input() dataSource: Product[] = [];
  constructor() { }

}
