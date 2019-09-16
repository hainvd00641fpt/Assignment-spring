import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coin} from '../coin';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private  http: HttpClient) {
  }

  listCoin(): Observable<Coin[]> {
    return this.http.get<{ data: Coin[] }>(
      `http://localhost:8088/api/admin/coins`,
      {}
    ).pipe(map(({data}) => data));
  }

  saveCoin(coin: Coin): Observable<Coin> {
    console.log('hello');
    return this.http.post<{ data: Coin }>(
      `http://localhost:8088/api/admin/coins`,
      coin,
      {}
    ).pipe(map(({data}) => data));
  }

  findByName(name: string): Observable<Coin[]> {
    return this.http.get(
      `http://localhost:8088/api/v1/coins/${name}`,
      {}
    ).pipe(map(response => {
      return response as Coin[];
    }));
  }
}
