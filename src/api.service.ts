import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendEmail(content) {
    console.log('in send email');
    let body = JSON.stringify(content);
    return this.http.post('/contact/', body, httpOptions);
  }
}