import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './shop/cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'product-single/id',component:SingleProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'notFound',component:NotfoundComponent},
  {path:'',component:ShopComponent},
  {path:'**',redirectTo:'notfound',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
