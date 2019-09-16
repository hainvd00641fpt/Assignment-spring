import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Make} from '../make';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private  http: HttpClient) { }

  listMake(): Observable<Make[]> {
    return this.http.get<{data: Make[]}>(
      `http://localhost:8088/api/admin/markets`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(
      map(({data}) => data)
    );
  }

  saveMake(make: Make): Observable<Make> {
    console.log('Success!');
    return this.http.post<{data: Make}>(
      `http://localhost:8088/api/admin/markets`,
      make,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data));
  }
}
