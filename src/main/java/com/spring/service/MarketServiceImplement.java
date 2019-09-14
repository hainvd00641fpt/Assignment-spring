package com.spring.service;

import com.spring.entity.Market;
import com.spring.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class MarketServiceImplement implements MarketService {
    @Autowired
    MarketRepository marketRepository;

    @Override
    public Market createNew(Market market) {
        market.setId(Calendar.getInstance().getTimeInMillis());
        marketRepository.save(market);
        return market;
    }

    @Override
    public List<Market> getListMark() {
        return marketRepository.findAll();
    }

    @Override
    public List<Market> search(String name) {
        return marketRepository.findAllByNameAndStatus(name, 1);
    }

    public Market findById(long id){
        return  marketRepository.findById(id).orElse(null);
    }

}
