import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OfertaComponentComponent } from './oferta-component/oferta-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OfertaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
