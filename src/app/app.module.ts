import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Material
import {  MatToolbarModule  } from '@angular/material/toolbar';
import {  MatCardModule } from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http'
import {  MatTooltipModule  } from '@angular/material/tooltip';

//Components
import { TopbarComponent } from './features/topbar/topbar.component';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';
import { MatCardComponent } from './shared/components/mat-card/mat-card.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { BaseContainerComponent } from './shared/components/base-container/base-container.component';
import { DetailedCardComponent } from './features/detailed-card/detailed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductsComponent,
    CartComponent,
    MatCardComponent,
    ModalComponent,
    BaseContainerComponent,
    DetailedCardComponent
    ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
 }
