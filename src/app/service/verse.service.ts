import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerseService {
  constructor(private http: HttpClient) {}

  public getVerse(): Observable<any> {
    return this.http.get('https://labs.bible.org/api/?passage=random&type=json');
  }
}
