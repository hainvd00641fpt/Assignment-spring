package com.spring.controller;

import com.spring.entity.Coin;
import com.spring.repository.CoinRepository;
import com.spring.service.CoinService;
import com.spring.service.CoinServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping(value = "/api/admin/coins")
public class CoinController {
    @Autowired
    CoinServiceImplement coinServiceImplement;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Coin> store(@RequestBody Coin obj) {
        return new ResponseEntity<>(coinServiceImplement.createNew(obj), HttpStatus.CREATED);

    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Coin>> list() {
        List<Coin> coinList = coinServiceImplement.getListCoin();
        return new ResponseEntity<>(coinList, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<Coin> detail(@PathVariable long id) {
        Coin coin = (Coin) coinServiceImplement.findById(id);
        if (coin == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(coin, HttpStatus.OK);
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/MarketId/{marketId}")
    public ResponseEntity<Coin> searchMarketId(@PathVariable long marketId) {
        Coin coin = (Coin) coinServiceImplement.findCoinByMarket(marketId);
        if (coin == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(coin, HttpStatus.OK);
        }
    }
}
