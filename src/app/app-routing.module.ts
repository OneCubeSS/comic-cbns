import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/admin/addbook/addbook.component';
import { AddcategoryComponent } from './components/admin/addcategory/addcategory.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookdetailsComponent } from './components/admin/bookdetails/bookdetails.component';
import { CategorydetailsComponent } from './components/admin/categorydetails/categorydetails.component';
import { EdtbookComponent } from './components/admin/edtbook/edtbook.component';
import { EdtcaterogyComponent } from './components/admin/edtcaterogy/edtcaterogy.component';
import { LandingComponent } from './components/admin/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/landing', component: LandingComponent },
  { path: 'admin/categorydetail', component: CategorydetailsComponent },
  { path: 'admin/bookdetail', component: BookdetailsComponent },  
  { path: 'admin/editcategory/:id', component: EdtcaterogyComponent },  
  { path: 'admin/editbook/:id', component: EdtbookComponent },
  { path: 'admin/addbook', component: AddbookComponent },
  { path: 'admin/addcategory', component: AddcategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
