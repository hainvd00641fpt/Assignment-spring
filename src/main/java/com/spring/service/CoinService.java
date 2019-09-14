package com.spring.service;

import com.spring.entity.Coin;

import java.util.List;

public interface CoinService {
    Coin createNew(Coin coin);

    List<Coin> getListCoin();

    List<Coin> search(String name);

    Coin findById(long id);

    List<Coin> findCoinByMarket(long marketId);
}
