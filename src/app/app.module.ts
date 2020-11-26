import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EdtcaterogyComponent } from './components/admin/edtcaterogy/edtcaterogy.component';
import { EdtbookComponent } from './components/admin/edtbook/edtbook.component';
import { CategorydetailsComponent } from './components/admin/categorydetails/categorydetails.component';
import { BookdetailsComponent } from './components/admin/bookdetails/bookdetails.component';
import { AddbookComponent } from './components/admin/addbook/addbook.component';
import { AddcategoryComponent } from './components/admin/addcategory/addcategory.component';
import { LandingComponent } from './components/admin/landing/landing.component';
import { EdtseriesComponent } from './components/admin/edtseries/edtseries.component';
import { AddseriesComponent } from './components/admin/addseries/addseries.component';
import { SeriesdetailsComponent } from './components/admin/seriesdetails/seriesdetails.component';
import { SeriesComponent } from './components/series/series.component';
import { IssuesComponent } from './components/issues/issues.component';
import { IssuedetailsComponent } from './components/issuedetails/issuedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    EdtcaterogyComponent,
    EdtbookComponent,
    CategorydetailsComponent,
    BookdetailsComponent,
    AddbookComponent,
    AddcategoryComponent,
    LandingComponent,
    EdtseriesComponent,
    AddseriesComponent,
    SeriesdetailsComponent,
    SeriesComponent,
    IssuesComponent,
    IssuedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
