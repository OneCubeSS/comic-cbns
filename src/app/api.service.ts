import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseApiUrl } from '../environments/environment';

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

  //books
  getBooks(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/issue/getbooks');
  }

  getBooksBySeries(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/issue/getBooksBySeries/'+id);
  }

  getBook(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/issue/getbook/'+id);
  }

  addBook(book: any): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/issue/addbook', book);
  }

  updateBook(id:any, book: any): Observable<any> {
    return this.httpClient.put(baseApiUrl+'/issue/updatebook/'+id, book);
  }

  deleteBook(id: any): Observable<any> {
    return this.httpClient.delete(baseApiUrl+'/comic/deletebook/'+id);
  }

  //series
  getAllSeries(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/series/getallseries');
  }

  getSeriesByPublisher(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/series/getSeriesByPublisher/'+id);
  }

  getSeries(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/series/getseries/'+id);
  }

  addSeries(series: any): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/series/addseries', series);
  }

  updateSeries(id:any, series: any): Observable<any> {
    return this.httpClient.put(baseApiUrl+'/series/updateseries/'+id, series);
  }

  deleteSeries(id: any): Observable<any> {
    return this.httpClient.delete(baseApiUrl+'/series/deleteseries/'+id);
  }

  //publishers
  getPublishers(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/publisher/getpublishers');
  }

  getPublisher(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/publisher/getpublisher/'+id);
  }
  
  addPublisher(publisher: any): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/publisher/addpublisher', publisher);
  }

  updatePublisher(id:any, publisher: any): Observable<any> {
    return this.httpClient.put(baseApiUrl+'/publisher/updatepublisher/'+id, publisher);
  }

  deletePublisher(id: any): Observable<any> {
    return this.httpClient.delete(baseApiUrl+'/publisher/deletepublisher/'+id);
  }

  //cats
  getCategories(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/comic/getcats');
  }

  getCategory(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/comic/getcat/'+id);
  }

  updateCategory(id:any, category: any): Observable<any> {
    return this.httpClient.put(baseApiUrl+'/comic/updatecat/'+id, category);
  }

  deleteCategory(id: any): Observable<any> {
    return this.httpClient.delete(baseApiUrl+'/comic/deletecat/'+id);
  }
}
