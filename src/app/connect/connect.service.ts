import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  getPeople(name: string) {
    return this.http.get('https://swapi.dev/api/people/?search=' + name);
  }
}
