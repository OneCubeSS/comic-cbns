import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseApiUrl } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  login(data):Observable<any> {
    return this.httpClient.post(baseApiUrl+'/admin/login', data);
  }  

  getToken() {
    return localStorage.getItem('access_token');
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/comic/getcats');
  }

  getBooks(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/comic/getbooks');
  }

}
