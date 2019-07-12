import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-flopkart-cart',
  templateUrl: './flopkart-cart.component.html',
  styleUrls: ['./flopkart-cart.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FlopkartCartComponent {
  @Input() dataSource: Product[] = [];
  constructor() { }

}
