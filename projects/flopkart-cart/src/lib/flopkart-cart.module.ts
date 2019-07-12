import { NgModule, Injector } from '@angular/core';
import { FlopkartCartComponent } from './flopkart-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [FlopkartCartComponent],
  imports: [BrowserModule, FormsModule ],
  entryComponents: [FlopkartCartComponent]
})
export class FlopkartCartModule {
  constructor(private injector: Injector){
    const flopKartCartElement = createCustomElement(FlopkartCartComponent,{injector: this.injector});
    customElements.define('flopkart-cart',flopKartCartElement);
  }
}
