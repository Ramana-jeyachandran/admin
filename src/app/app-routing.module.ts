import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductsComponent } from './editproducts/editproducts.component';


const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"createProduct",
    component:CreateproductComponent
  },
  
  {
    path:"productlist",
    component:ProductlistComponent,
    children:[{
      path:"productspecific/:id",
      component:EditproductsComponent
    }]
  },
  {
    path:"register/login",
    component:LoginComponent
  },
  {
    path:"register/login/productlist",
    component:ProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
