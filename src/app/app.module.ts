import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PKButtonComponent } from './pk-button/pk-button.component';
import { PkFooterComponent } from './pk-footer/pk-footer.component';
import { PkModalComponent } from './pk-modal/pk-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PKButtonComponent,
    PkFooterComponent,
    PkModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
