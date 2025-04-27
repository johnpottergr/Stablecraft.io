---
title: TVL Monitoring (Uniswap)
sidebarLabel: TVL (Uniswap)
description: Monitor stablecoin pool liquidity (TVL) on Uniswap using The Graph’s public subgraph API as part of the Stress Test framework.
sidebar_position: "8"
slug: /stress-test/uniswap-tvl
---
The text below documents how we retrieve and monitor stablecoin pool liquidity (Total Value Locked, or TVL) on Uniswap as part of the Stress Test system.

Monitoring TVL on decentralized exchanges like Uniswap helps detect early signs of liquidity stress, market exits, or weakening peg support for stablecoins.

We use Uniswap’s public subgraph API hosted on The Graph to retrieve pool-level liquidity data daily.

---

## Purpose

Tracking TVL across Uniswap stablecoin pools allows us to identify:

- Major liquidity withdrawals that could precede peg depegging
- Imbalances across decentralized liquidity venues
- Reduced arbitrage efficiency for stabilizing price deviations

This TVL metric complements similar tracking on Curve and SushiSwap.

---

## API Endpoint

**Endpoint**:
```bash
https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
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
- Replace PAIR_CONTRACT_ADDRESS with the address of the stablecoin pair you want to monitor (e.g., USDC/DAI, USDC/USDT).

## Example Response (truncated)

```json
{
  "data": {
    "pairDayDatas": [
      {
        "date": 1714003200,
        "reserveUSD": "215000000.00",
        "dailyVolumeUSD": "15000000.00"
      }
    ]
  }
}
```

## Important Fields

**Field**	**Purpose**
- date	          Daily timestamp (UTC)
- reserveUSD	  Current pool liquidity in USD
- dailyVolumeUSD  Daily trading volume (optional secondary signal)

## TVL Evaluation Criteria

We track daily percentage changes in liquidity:
- Stable (Low Risk): Daily TVL change between -5% and +5%
- Moderate Risk: Daily TVL change between -10% and -5%, or +5% and +10%
- High Risk: Daily TVL change exceeding ±10%
Significant liquidity reductions are flagged for investigation.

## Rate Limits and Notes

- No formal rate limits, but best practice is querying once daily.
- TVL on Uniswap can fluctuate more sharply due to individual trader movements compared to Curve.
- Key stablecoin pairs monitored:

USDC/DAI
USDC/USDT
DAI/USDT
FRAX/USDC
TUSD/USDC

(Pair addresses are managed in a local configuration file.)

# Last Word

- Monitoring TVL across Uniswap’s stablecoin pools strengthens the overall early detection capacity for stablecoin stress.
- Rapid liquidity movements can signal emerging risk even before peg deviations or volume surges are visible.
