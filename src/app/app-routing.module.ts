import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/admin/addbook/addbook.component';
import { AddcategoryComponent } from './components/admin/addcategory/addcategory.component';
import { AddseriesComponent } from './components/admin/addseries/addseries.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookdetailsComponent } from './components/admin/bookdetails/bookdetails.component';
import { CategorydetailsComponent } from './components/admin/categorydetails/categorydetails.component';
import { EdtbookComponent } from './components/admin/edtbook/edtbook.component';
import { EdtcaterogyComponent } from './components/admin/edtcaterogy/edtcaterogy.component';
import { EdtseriesComponent } from './components/admin/edtseries/edtseries.component';
import { LandingComponent } from './components/admin/landing/landing.component';
import { SeriesdetailsComponent } from './components/admin/seriesdetails/seriesdetails.component';
import { HomeComponent } from './components/home/home.component';
import { IssuedetailsComponent } from './components/issuedetails/issuedetails.component';
import { IssuesComponent } from './components/issues/issues.component';
import { LoginComponent } from './components/login/login.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/landing', component: LandingComponent },
  { path: 'admin/categorydetail', component: CategorydetailsComponent },
  { path: 'admin/bookdetail', component: BookdetailsComponent },
  { path: 'admin/seriesdetails', component: SeriesdetailsComponent },  
  { path: 'admin/editcategory/:id', component: EdtcaterogyComponent },  
  { path: 'admin/editbook/:id', component: EdtbookComponent },
  { path: 'admin/editseries/:id', component: EdtseriesComponent },
  { path: 'admin/addbook', component: AddbookComponent },
  { path: 'admin/addcategory', component: AddcategoryComponent },
  { path: 'admin/addseries', component: AddseriesComponent },
  { path: 'publisher/series/:id', component: SeriesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/issues/:id', component: IssuesComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues-details/:id', component: IssuedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
