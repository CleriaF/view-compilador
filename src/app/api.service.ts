import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  analyzer(code){
    return this.http.post('http://localhost:8080/analise-lexica', code);
  }

}
