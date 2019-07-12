import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-flopkart-home',
  templateUrl: './flopkart-home.component.html',
  styleUrls: ['./flopkart-home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FlopkartHomeComponent {
  @Input() dataSource: Product[] = [];
  @Output() addToCartEvent = new EventEmitter<Product>();
  constructor() { }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

}
