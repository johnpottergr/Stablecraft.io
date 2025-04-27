---
title: "Curve Data API"
sidebarLabel: "Curve API"
description: "Instructions for retrieving daily price data and yield data from Curve using free public APIs."
sidebar_position: 2
slug: /liquidity-docs/curve-data-api
---
## Endpoint:
https://api.curve.fi/api/getPools/ethereum/main

## Authentication:
- None required

## Query Example (GET request):
```bash
GET https://api.curve.fi/api/getPools/ethereum/main
```

```markdown
Important Fields:
- reserveUSD: Pool liquidity
- crvApy: Curve yield APR
```