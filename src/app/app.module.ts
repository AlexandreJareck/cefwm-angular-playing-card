import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ClassChangeColorPipe } from './pipes/class-change-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClassChangeColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
