---
title: Stablecoin TVL Monitoring with SushiSwap Subgraph
sidebarLabel: TVL (SushiSwap)
description: Retrieve daily stablecoin liquidity data from SushiSwap using The Graph's public subgraph API.
slug: /risk-manager/tvl-sushiswap
---

# Stablecoin TVL Monitoring with SushiSwap Subgraph

We retrieve daily liquidity data for stablecoin pools on SushiSwap using The Graph’s public subgraph API.

Monitoring stablecoin TVL (Total Value Locked) across decentralized exchanges like SushiSwap helps detect early liquidity stress signals.

---

## API Endpoint

**Endpoint**:
```bash
https://api.thegraph.com/subgraphs/name/sushiswap/exchange
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

**Field**	       **Purpose**
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

- date is in UNIX timestamp format.
- reserveUSD provides the USD liquidity of the pool.
- dailyVolumeUSD gives daily trading volume (optional signal).

## Monitoring Criteria

- **TVL Drop Flag:**
Pools are flagged if liquidity (reserveUSD) drops by more than 10% within 24 hours.

- **Volume Spike Flag (optional):**
Pools are flagged if dailyVolumeUSD is over 2x the 7-day moving average.

## Rate Limits and Notes

- No hard limits, but recommended to query once daily.
- Data updates are typically near-real-time (a few minutes delay).
- Stablecoin pools monitored include:

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; USDC/DAI
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; USDC/USDT
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DAI/USDT
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FRAX/USDC
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TUSD/USDC

(Pair contract addresses are stored separately.)

---
