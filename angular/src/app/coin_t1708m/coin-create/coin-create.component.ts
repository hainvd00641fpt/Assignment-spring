import { Component, OnInit } from '@angular/core';
import {Coin} from '../../coin';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CoinService} from '../../service/coin.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-coin-create',
  templateUrl: './coin-create.component.html',
  styleUrls: ['./coin-create.component.css']
})
export class CoinCreateComponent implements OnInit {

  coin: Coin;
  form: FormGroup;
  formControls = {
    name: [null],
    baseAsset: [null],
    quoteAsset: [null],
    lastPrice: [null],
    volumn24h: [null],
    marketId_id: [null]
  }

  constructor(private formBuilder: FormBuilder, private coinService: CoinService) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  doSubmit() {

    // @ts-ignore
    this.coin = new Coin(this.form.get('name').value,
      this.form.get('baseAsset').value,
      this.form.get('quoteAsset').value,
      this.form.get('lastPrice').value,
      this.form.get('volumn24h').value,
      this.form.get('marketId_id').value);
    console.log('hello');
    let observable: Observable<Coin>;
    observable = this.coinService.saveCoin(this.coin);
    observable
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }

}
