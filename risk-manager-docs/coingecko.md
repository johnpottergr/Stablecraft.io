---
title: "Peg Monitoring with CoinGecko"
sidebarLabel: "Peg Monitoring"
description: "Retrieve and evaluate stablecoin prices using the CoinGecko public API to monitor peg stability."
sidebar_position: 2
slug: "/risk-manager/peg-monitoring"
---
The text below documents how we retrieve and monitor stablecoin peg stability using the CoinGecko Free Public API.

Peg stability is determined by comparing the current price of each stablecoin to the \$1.00 USD target. Deviations greater than ±0.5% are flagged for review.

## API Endpoint

### Endpoint:
```bash
GET https://api.coingecko.com/api/v3/coins/markets
```
### Query Parameters:
- vs_currency=usd
- ids=usd-coin,tether,dai,trueusd,frax

## Example Query (cURL)

curl -X GET "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin,tether,dai,trueusd,frax"

## Example Response (truncated)

```json
[
  {
    "id": "usd-coin",
    "symbol": "usdc",
    "current_price": 0.9985
  },
  {
    "id": "dai",
    "symbol": "dai",
    "current_price": 1.001
  }
]
```

## Peg Evaluation Criteria

- Stable (✅): Price between $0.995 and $1.005.
- Slight Deviation (⚠️): Price between 0.995 and 1.010.
- Depegged (❗): Price outside of $0.990–$1.010 range.

Stablecoin peg status is updated daily based on the most recent CoinGecko data.

## Rate Limits and Notes

- The public API allows 5–15 calls per minute, depending on the traffic.
- Caching is recommended: we update once a day to stay within the free limits.
- No authentication key required for public access.

---