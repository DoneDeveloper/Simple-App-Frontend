import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { DetailedCardComponent } from './features/detailed-card/detailed-card.component';
import { BaseContainerComponent } from './shared/components/base-container/base-container.component';

const routes: Routes = [  
  {path: '', component: BaseContainerComponent},
  {path: 'detailed-card', component: DetailedCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
 }
