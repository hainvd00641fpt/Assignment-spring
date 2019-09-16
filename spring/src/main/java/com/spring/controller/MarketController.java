package com.spring.controller;

import com.spring.entity.Coin;
import com.spring.entity.Market;
import com.spring.repository.MarketRepository;
import com.spring.service.CoinServiceImplement;
import com.spring.service.MarketServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping(value = "/api/admin/markets")
public class MarketController {
    @Autowired
    MarketServiceImplement marketServiceImplement;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Market> store(@RequestBody Market obj){
        try{
            obj.setId(Calendar.getInstance().getTimeInMillis());
            marketServiceImplement.createNew(obj);
            return new ResponseEntity<>(obj, HttpStatus.CREATED);
        }catch (Exception ex){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Market>> list(){
        List<Market> coinList = marketServiceImplement.getListMark();
        return new ResponseEntity<>(coinList, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<Market> detail(@PathVariable long id) {
        Market market = (Market) marketServiceImplement.findById(id);
        if (market == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(market, HttpStatus.OK);
        }
    }


}

