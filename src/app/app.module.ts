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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


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
    ScrollToModule.forRoot(), 
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatDialogModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [PkModalComponent]
})
export class AppModule { }
