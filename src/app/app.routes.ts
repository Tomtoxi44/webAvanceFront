import { Routes } from '@angular/router';
import { PanierComponent } from './pages/panier/panier.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path: "panier", component: PanierComponent},
    {path: "checkout", component: CheckoutComponent},
];
