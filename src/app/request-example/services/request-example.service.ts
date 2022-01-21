import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = baseUrl + 'character';

@Injectable()
export class RequestExampleService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any> {
    return this.http.get(characterUrl);
  }
}