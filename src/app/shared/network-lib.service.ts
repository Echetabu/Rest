import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkLibService {

  private BASE_URL = "https://restcountries.com/v3.1/"

  constructor(private readonly httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    const url = this.BASE_URL + path;
    return  this.httpClient.get<T>(url)
  }
}
