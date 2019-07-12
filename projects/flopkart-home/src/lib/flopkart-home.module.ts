import { NgModule, Injector } from '@angular/core';
import { FlopkartHomeComponent } from './flopkart-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [FlopkartHomeComponent],
  imports: [BrowserModule, FormsModule ],
  entryComponents: [FlopkartHomeComponent]
})
export class FlopkartHomeModule {
  constructor(private injector: Injector){
    const flopKartHomeElement = createCustomElement(FlopkartHomeComponent,{injector: this.injector});
    customElements.define('flopkart-home',flopKartHomeElement);
  }
}
