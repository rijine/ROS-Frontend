import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(private httpClient: HttpClient) { }

  private API_URL: string = "https://jsonplaceholder.typicode.com/";

  GetWithoutToken(endpoint) {
    return this.httpClient.get(`${this.API_URL}${endpoint}`);
  }
}
