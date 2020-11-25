import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from 'src/app/api.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-edtbook',
  templateUrl: './edtbook.component.html',
  styleUrls: ['./edtbook.component.css']
})
export class EdtbookComponent implements OnInit {
  baseImgUrl = "http://localhost:4000/";
  bookForm: FormGroup;
  _id = '';
  title = '';
  covermedia = '';
  description = '';
  preview: string;
  image;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.params.id);
    this.bookForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  getBook(id: any) {
    this.apiService.getBook(id).subscribe((res) => {
      console.log("data: ", res.data);
      this._id = res.data._id;
      this.preview = this.baseImgUrl + res.data.covermedia;
      this.bookForm.setValue({
        title: res.data.title,
        description: res.data.description,
      });
    });
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  selectedImage(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;

      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result as string;
      }
      reader.readAsDataURL(file);
    } 
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  
    return formData;
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    const test = this.toFormData(this.bookForm.value);
    
    if(this.image) {
      test.append('covermedia', this.image);
    }
    this.apiService.updateBook(this._id, test).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/admin/landing']);
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  backLanding() {
    this.router.navigate(['/admin/landing']);
  }
}
