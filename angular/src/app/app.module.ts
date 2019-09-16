import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateMakeComponent } from './make_t1708m/create-make/create-make.component';
import { MakeListComponent } from './make_t1708m/make-list/make-list.component';
import { CoinListComponent } from './coin_t1708m/coin-list/coin-list.component';
import { CoinCreateComponent } from './coin_t1708m/coin-create/coin-create.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'coin/listCoin', component: CoinListComponent},
  {path: 'coin/createCoin', component: CoinCreateComponent},
  {path: 'make/listMake', component: MakeListComponent},
  {path: 'make/createMake', component: CreateMakeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateMakeComponent,
    MakeListComponent,
    CoinListComponent,
    CoinCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
