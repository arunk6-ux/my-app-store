import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchComponent } from './watch/watch.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {
    path:'',component:WatchComponent
  },
  {
  path:'add-product',component:AddProductComponent
  },
  {
    path:'add-product/:id',component:AddProductComponent
  },
  {
    path:'productdetails',component:ProductdetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    WatchComponent,
    FooterComponent,
    AddProductComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

