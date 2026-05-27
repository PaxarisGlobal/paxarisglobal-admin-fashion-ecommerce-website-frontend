import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home.component';
import { ProductListComponent } from './features/catalog/components/product-list.component';
import { ProductDetailComponent } from './features/catalog/components/product-detail.component';
import { CartComponent } from './features/experience/components/cart.component';
import { LoginComponent } from './features/experience/components/login.component';
import { SignupComponent } from './features/experience/components/signup.component';
import { CheckoutComponent } from './features/experience/components/checkout.component';
import { WishlistComponent } from './features/experience/components/wishlist.component';
import { AccountComponent } from './features/experience/components/account.component';
import { AdminComponent } from './features/experience/components/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
