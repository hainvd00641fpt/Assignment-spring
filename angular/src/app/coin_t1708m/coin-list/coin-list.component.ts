import {Component, OnInit} from '@angular/core';
import {Coin} from '../../coin';
import {CoinService} from '../../service/coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  coins: Coin[];
  name = '';

  constructor(private coinService: CoinService) {
  }

  ngOnInit() {
    this.coinService.listCoin().subscribe({
      next: value => {
        this.coins = value;
      }
    });
  }

  findByName() {
    this.coinService.findByName(this.name).subscribe( x => this.coins = x);
  }

}
