---
title: "Stablecoin TVL Monitoring with SushiSwap Subgraph"
sidebarLabel: "TVL (SushiSwap)"
description: "Retrieve daily stablecoin liquidity data from SushiSwap using The Graph's public subgraph API."
sidebar_position: 4
slug: "/risk-manager/tvl-sushiswap"
---
We retrieve daily liquidity data for stablecoin pools on SushiSwap using The Graph’s public subgraph API.

Monitoring stablecoin TVL (Total Value Locked) across decentralized exchanges, such as SushiSwap, helps detect early signs of liquidity stress.

## API Endpoint
**Endpoint**:
```bash
https://api.thegraph.com/subgraphs/name/sushiswap/exchange
```

**Authentication:**
- None required.

## Example Query (GraphQL)
```graphql
{
  pairDayDatas(
    first: 1,
    orderBy: date,
    orderDirection: desc,
    where: { pairAddress: "PAIR_CONTRACT_ADDRESS" }
  ) {
    date
    reserveUSD
    dailyVolumeUSD
  }
}
```

## Fields Monitored
**Field**          **Purpose**

- reserveUSD	   Current liquidity (TVL) in USD
- dailyVolumeUSD   Daily trading volume (optional secondary signal)

## Example Response (truncated)
```json
{
  "data": {
    "pairDayDatas": [
      {
        "date": 1714003200,
        "reserveUSD": "78000000.00",
        "dailyVolumeUSD": "3200000.00"
      }
    ]
  }
}
```

- **date **is in UNIX timestamp format.
- **reserveUSD **provides the USD liquidity of the pool.
- **dailyVolumeUSD** gives daily trading volume (optional signal).

## Monitoring Criteria

- **TVL Drop Flag:** Pools are flagged if liquidity (reserveUSD) drops by more than 10% within 24 hours.
- **Volume Spike Flag (optional):** Pools are flagged if dailyVolumeUSD is more than twice the 7-day moving average.

## Rate Limits and Notes

- No hard limits, but it's recommended to query once a day.
- Data updates are typically near real-time (with a few minutes' delay).
- Stablecoin pools monitored include:

     **USDC/DAI**     

(Pair contract addresses are stored separately.)

---