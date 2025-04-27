---
title: "Stablecoin TVL Monitoring with Uniswap Subgraph"
sidebarLabel: "TVL (Uniswap)"
description: "Retrieve daily stablecoin liquidity data from Uniswap using The Graph's public subgraph API."
sidebar_position: 5
slug: "/risk-manager/tvl-uniswap"
---
The text below documents how we retrieve daily liquidity data for stablecoin pools on Uniswap using The Graph’s public subgraph API.

Monitoring total value locked (TVL) in Uniswap pools helps identify stablecoin liquidity shifts that may signal early risk events.

## API Endpoint

**Endpoint**:

```bash
https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
```

**Authentication:**

None required.

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

**Field**       	                     **Purpose**

- reserveUSD	          Current liquidity (TVL) in USD
- dailyVolumeUSD	  Daily trading volume (optional secondary signal)

## Example Response (truncated)

```json
 {
  "data": {
    "pairDayDatas": [
      {
        "date": 1714003200,
        "reserveUSD": "145000000.00",
        "dailyVolumeUSD": "5000000.00"
      }
    ]
  }
}
```

- date is in UNIX timestamp format (UTC midnight).
- reserveUSD gives current liquidity.
- dailyVolumeUSD shows daily volume for reference.

## Monitoring Criteria

- TVL Drop Flag: If liquidity (reserveUSD) decreases by more than 10% in 24 hours, pool is flagged for review.
- Volume Spike Flag (optional): If dailyVolumeUSD spikes by more than 2x the 7-day average, the pool is flagged.

## Rate Limits and Notes

- There are no strict rate limits, but it's best practice to poll once a day.
- Uniswap V2 Subgraph is static; live updates are reflected with a minor delay (~minutes).
- Stablecoin pools to monitor:

          USDC/DAI
          USDC/USDT
          DAI/USDT
          FRAX/USDC
          TUSD/USDC

(Pair contract addresses are stored separately in the project database.)

---