package com.spring.service;

import com.spring.entity.Market;

import java.util.List;

public interface MarketService {
    Market createNew(Market market);

    List<Market> getListMark();

    List<Market> search(String name);

    Market findById(long id);
}
