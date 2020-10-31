import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Book } from '../book';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  baseImgUrl = "http://localhost:4000/";
  catColumns: string[] = ['covermedia', 'name'];
  dataCat: Category[] = [];
  bookColumns: string[] = ['covermedia', 'title'];
  dataBook: Book[] = [];
  isLoadingCats = true;
  isLoadingBooks = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLoggedIn()) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['admin/landing']);
    }

    this.apiService.getCategories().subscribe(
      (res) => {
        console.log('result: ', res);
        this.dataCat = res.data;
        console.log(this.dataCat);
        this.isLoadingCats = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingCats = false;
      }
    );

    this.apiService.getBooks().subscribe(
      (res) => {
        console.log('result: ', res);
        this.dataBook = res.data;
        console.log(this.dataBook);
        this.isLoadingBooks = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingBooks = false;
      }
    );
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

}
