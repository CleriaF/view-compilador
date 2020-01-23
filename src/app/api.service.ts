import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Code} from "./model/Code";
import {Token} from "./model/Token";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = "http://localhost:8080/analise-lexica";

  constructor(private http: HttpClient) {
  }

  analyze(code) {
    return this.http.post<Token[]>(this.apiUrl, code, {observe: "response"});
  }

  findAllExamples() {
    return this.http.get<Code[]>(this.apiUrl, {observe: "response"});
  }
}
