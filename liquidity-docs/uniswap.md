---
title: "UniSwap Data API"
sidebarLabel: "UniSwap API"
description: "Instructions for retrieving daily price data, pool depth data, and stablecoin dominance data from UniSwap using free public APIs."
---

# UniSwap Data API

## Endpoint:

https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2

## Authentication:

- None required

## Query Example (GraphQL query):

```graphql
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