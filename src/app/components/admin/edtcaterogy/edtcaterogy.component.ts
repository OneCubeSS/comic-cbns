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
  selector: 'app-edtcaterogy',
  templateUrl: './edtcaterogy.component.html',
  styleUrls: ['./edtcaterogy.component.css']
})
export class EdtcaterogyComponent implements OnInit {
  baseImgUrl = "http://localhost:4000/";
  pubForm: FormGroup;
  _id = '';
  title = '';
  covermedia = '';
  preview: string;
  image;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCategory(this.route.snapshot.params.id);
    this.pubForm = this.formBuilder.group({
      title: [null, Validators.required],
    });
  }

  getCategory(id: any) {
    this.apiService.getPublisher(id).subscribe((res) => {
      console.log("data: ", res.data);
      this._id = res.data._id;
      this.preview = this.baseImgUrl + res.data.covermedia;
      this.pubForm.setValue({
        title: res.data.title,
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
    const test = this.toFormData(this.pubForm.value);
    
    if(this.image) {
      test.append('covermedia', this.image);
    }
    this.apiService.updatePublisher(this._id, test).subscribe(
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
