import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from '../admin/book';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  wishlisted = false;
  baseImgUrl = 'http://localhost:4000/';
  data: Book[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getBooksBySeries(this.route.snapshot.params.id);
    } else {
      this.getBooks();
    }
  }

  checkData(data) {
    if(data.length > 0) {
      return true;
    }
    return false;
  }

  getBooksBySeries(id: any) {
    this.apiService.getBooksBySeries(id).subscribe(
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

  getBooks() {
    this.apiService.getBooks().subscribe(
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

  AddtoWishlist()
  {
    if(this.wishlisted==false)
    {
      this.wishlisted=true;
    }
    else{
      this.wishlisted=false;
    }
  }
}
