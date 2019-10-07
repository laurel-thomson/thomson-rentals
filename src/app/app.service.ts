import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class AppService {
    constructor(private http:HttpClient){}

    sendEmail(content) {
        let body = JSON.stringify(content);
        return this.http.post('/contact/', body, httpOptions);
    }
}