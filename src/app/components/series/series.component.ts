import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Series } from '../admin/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  baseImgUrl = 'http://localhost:4000/';
  data: Series[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getSeriesByPublisher(this.route.snapshot.params.id);
    } else {
      this.getAllSeries();
    }
  }

  checkData(data) {
    if(data.length > 0) {
      return true;
    }
    return false;
  }

  getSeriesByPublisher(id: any) {
    this.apiService.getSeriesByPublisher(id).subscribe(
      (res) => {
        this.data = res.data;
        console.log("data: ", this.data);
        this.isLoading = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoading = false;
      }
    );
  }

  getAllSeries() {
    this.apiService.getAllSeries().subscribe(
      (res) => {
        this.data = res.data;
        console.log("data: ", this.data);
        this.isLoading = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoading = false;
      }
    );
  }
}
