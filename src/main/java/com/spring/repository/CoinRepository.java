package com.spring.repository;

import com.spring.entity.Coin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoinRepository extends JpaRepository<Coin, Long> {
    List<Coin> findAllByNameAndStatus(String name, int status);

    List<Coin> findAllByMarketIdEquals(long marketId);
}
