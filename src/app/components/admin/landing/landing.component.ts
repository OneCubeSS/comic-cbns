import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Book } from '../book';
import { Series } from '../series';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  baseImgUrl = "http://localhost:4000/";
  catColumns: string[] = ['covermedia', 'title', 'edit', 'delete'];
  dataCat: Category[] = [];
  isLoadingCats = true;
  bookColumns: string[] = ['covermedia', 'title', 'desc', 'year', 'edit', 'delete'];
  dataBook: Book[] = [];
  isLoadingBooks = true;
  seriesColumns: string[] = ['covermedia', 'title', 'year', 'edit', 'delete'];
  dataSeries: Series[] = [];
  isLoadingSeries = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLoggedIn()) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['admin/landing']);
    }

    this.getPublishers();
    this.getSeries();
    this.getBooks();
  }

  getPublishers() {
    this.apiService.getPublishers().subscribe(
      (res) => {
        console.log('result: ', res);
        this.dataCat = res.data;
        console.log("publisher: ", this.dataCat);
        this.isLoadingCats = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingCats = false;
      }
    );
  }

  getSeries() {
    this.apiService.getAllSeries().subscribe(
      (res) => {
        console.log('result: ', res);
        this.dataSeries = res.data;
        console.log("series: ", this.dataSeries);
        this.isLoadingSeries = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingSeries = false;
      }
    );
  }

  getBooks() {
    this.apiService.getBooks().subscribe(
      (res) => {
        console.log('result: ', res);
        this.dataBook = res.data;
        console.log("books: ", this.dataBook);
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

  deletePublisher(id: any) {
    this.isLoadingCats = true;
    this.apiService.deletePublisher(id).subscribe(
      (res) => {
        this.isLoadingCats = true;
        if(res.success) {
          this.getPublishers();
        }
        this.isLoadingCats = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingCats = false;
      }
    );
  }

  deleteSeries(id: any) {
    this.isLoadingBooks = true;
    this.apiService.deleteSeries(id).subscribe(
      (res) => {
        this.isLoadingSeries = true;
        if(res.success) {
          this.getSeries();
        }
        this.isLoadingSeries = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingSeries = false;
      }
    );
  }

  deleteBook(id: any) {
    this.isLoadingBooks = true;
    this.apiService.deleteBook(id).subscribe(
      (res) => {
        this.isLoadingBooks = true;
        if(res.success) {
          this.getBooks();
        }
        this.isLoadingBooks = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingBooks = false;
      }
    );
  }
}
