---
title: "SushiSwap Data API"
sidebarLabel: "SushiSwap API"
description: "Instructions for retrieving daily price data from SushiSwap using free public APIs."
---

# SushiSwap Data API

## Endpoint:

https://api.thegraph.com/subgraphs/name/sushiswap/exchange

## Authentication:

- None required

## Query Example (GraphQL query):

```graphql
Query Example (for daily liquidity and volume):
{
  pairDayDatas(
    first: 100,
    orderBy: date,
    orderDirection: asc,
    where: { pairAddress: "PAIR_CONTRACT_ADDRESS" }
  ) {
    date
    dailyVolumeUSD
    reserveUSD
  }
}
```