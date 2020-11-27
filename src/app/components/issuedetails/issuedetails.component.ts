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
  wishlisted=false;
  baseImgUrl = 'http://localhost:4000/';
  data: Book = {
    _id: '',
    title: '',
    year: '',
    description: '',
    writer: '',
    illustrated: '',
    publisher: '',
    covermedia: '',
    artist: '',
    characters: []
  };
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

  checkData(data) {
    if(data.length > 0) {
      return true;
    }
    return false;
  }

  getBooksById(id: any) {
    this.apiService.getBook(id).subscribe(
      (res) => {        
        console.log("data: ", res.data);
        this.data.title = res.data.title;
        this.data.description = res.data.description;
        this.data.year = res.data.year;
        this.data.writer = res.data.writer;
        this.data.illustrated = res.data.illustrated;
        this.data.covermedia = this.baseImgUrl + res.data.covermedia;
        this.data.publisher = res.data.publisher.title;
        this.isLoading = false;
        console.log("data: ", this.data);
      },
      (err) => {
        console.log('error: ', err);
        this.isLoading = false;
      }
    );
  }
}
