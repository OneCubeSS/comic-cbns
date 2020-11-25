import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from '../admin/book';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.css']
})
export class IssuedetailsComponent implements OnInit {
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
      this.getBooksById(this.route.snapshot.params.id);
    } else {
      //think
    }
  }

  checkData(data) {
    if(data.length > 0) {
      return true;
    }
    return false;
  }

  getBooksById(id: any) {
    this.apiService.getBook(id).subscribe(
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
