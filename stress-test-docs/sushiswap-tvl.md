---
title: TVL Monitoring (SushiSwap)
sidebarLabel: TVL (SushiSwap)
description: Monitor stablecoin pool liquidity (TVL) on SushiSwap using The Graph’s public subgraph API as part of the Stress Test framework.
slug: /stress-test/sushiswap-tvl
---

# TVL Monitoring (SushiSwap)

The text below documents how we retrieve and monitor stablecoin pool liquidity (Total Value Locked, or TVL) on SushiSwap as part of the Stress Test system.

Monitoring liquidity across decentralized exchanges like SushiSwap provides critical visibility into emerging risks tied to stablecoin liquidity drain or redemption pressure.

We use SushiSwap’s public subgraph API hosted on The Graph to retrieve pool-level liquidity data daily.

---

## Purpose

Tracking TVL on SushiSwap helps detect:

- Large stablecoin liquidity withdrawals
- Market exit pressure ahead of visible peg movement
- Shifting liquidity patterns that could weaken arbitrage mechanisms

This metric complements TVL tracking on Curve and Uniswap.

---

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
- Replace PAIR_CONTRACT_ADDRESS with the address of the specific stablecoin pair, such as USDC/DAI or USDC/USDT.

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

## Important Fields

**Field**	**Purpose**
- date	          Daily timestamp (UTC)
- reserveUSD	  Current pool liquidity in USD
- dailyVolumeUSD  Daily trading volume (optional secondary signal)

## TVL Evaluation Criteria

We monitor daily percentage changes in liquidity:
- Stable (Low Risk): Daily TVL change between -5% and +5%
- Moderate Risk: Daily TVL change between -10% and -5%, or +5% and +10%
- High Risk: Daily TVL change exceeding ±10%
Significant liquidity withdrawals are flagged for investigation.

## Rate Limits and Notes

- No formal rate limit enforced, but best practice is polling once daily.
- SushiSwap liquidity is thinner than Uniswap or Curve for some pairs — monitor liquidity changes carefully.
- Monitor key stablecoin pools such as:

USDC/DAI
USDC/USDT
DAI/USDT
FRAX/USDC
TUSD/USDC

(Pair addresses should be maintained in a local configuration file.)

## Last Word

- Monitoring TVL across SushiSwap pools adds valuable redundancy and early warning capacity to stablecoin stress detection.
- Liquidity drains on secondary exchanges can foreshadow larger market shifts before peg movements are apparent.

---