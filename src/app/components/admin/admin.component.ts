import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  message: "";

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    if(!this.isLoggedIn()) {
      this.initForm();
    } else {
      this.router.navigate(['admin/editcategories']);
    }
  }
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess() {
    if(this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(result => {
        console.log("result: ", result);
        if (result.token) {
          localStorage.setItem('access_token', result.token);
          this.router.navigate(['admin/editcategories']);
        } else {
          this.message = result.message;
        }
      }, (err) => {
        console.log("error: ", err);
      });
    }
  }
}
