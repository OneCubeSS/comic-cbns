import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Category } from '../admin/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseImgUrl = "http://localhost:4000/";
  dataCat: Category[] = [];
  isLoadingCats = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.apiService.getPublishers().subscribe(
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
  }

  checkData(data) {
    if(data.length > 0) {
      return true;
    }
    return false;
  }

}
