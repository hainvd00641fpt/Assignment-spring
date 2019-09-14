package com.spring.service;

import com.spring.entity.Coin;
import com.spring.repository.CoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
@Service
public class CoinServiceImplement implements CoinService {
    @Autowired
    CoinRepository coinRepository;

    @Override
    public Coin createNew(Coin coin) {
        coin.setId(Calendar.getInstance().getTimeInMillis());
        coin.setCreateAt(Calendar.getInstance().getTimeInMillis());
        coin.setUpdatedAt(Calendar.getInstance().getTimeInMillis());
        coinRepository.save(coin);
        return coin;
    }

    @Override
    public List<Coin> getListCoin() {
        return coinRepository.findAll();
    }

    @Override
    public List<Coin> search(String name) {
        return coinRepository.findAllByNameAndStatus(name, 1);
    }

    public Coin findById(long id){
        return  coinRepository.findById(id).orElse(null);
    }

    @Override
    public List<Coin> findCoinByMarket(long marketId) {
        return coinRepository.findAllByMarketIdEquals(marketId);
    }


}
