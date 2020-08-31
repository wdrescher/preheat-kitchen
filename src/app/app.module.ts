import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PKButtonComponent } from './pk-button/pk-button.component';
import { PkFooterComponent } from './pk-footer/pk-footer.component';
import { PkModalComponent } from './pk-modal/pk-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PkInputBoxComponent } from './pk-input-box/pk-input-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PKButtonComponent,
    PkFooterComponent,
    PkModalComponent,
    PkInputBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatDialogModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [PkModalComponent]
})
export class AppModule { }
