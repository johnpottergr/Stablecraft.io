---
title: "Daily Volume Monitoring"
sidebarLabel: "Daily Volume"
description: "Track stablecoin trading volume using CoinGecko's API as part of the Stress Test framework."
slug: "/stress-test/daily-volume"
---

# Daily Volume Monitoring

The text below documents how we monitor daily trading volume for major stablecoins as part of the Stress Test system.

**Significant shifts in daily trading volume can signal changes in market activity, liquidity availability, or potential stress events affecting stablecoins.**

We use CoinGecko’s API to retrieve daily volume data.

## Purpose

Monitoring daily volume helps identify:

- Increased redemption or swapping activity during early stress events
- Abnormal trading patterns indicating panic behavior
- Drops in trading activity that may reflect illiquidity or loss of confidence

Volume analysis serves as a complementary metric alongside price and liquidity tracking.

## API Endpoint

**Endpoint**:

```bash
GET https://api.coingecko.com/api/v3/coins/markets
```

**Query Parameters:**

- vs_currency=usd
- ids=usd-coin,dai,tether,trueusd,frax

## Example Query (cURL)

```bash
curl -X GET "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin,dai,tether,trueusd,frax"
```

## Example Response (truncated)

```json
[
  {
    "id": "usd-coin",
    "symbol": "usdc",
    "total_volume": 350000000
  },
  {
    "id": "dai",
    "symbol": "dai",
    "total_volume": 280000000
  }
]
```

## Important Fields

**Field** 	               **Purpose**
**total_volume**     24-hour trading volume in USD

## Volume Volatility Evaluation Criteria

We track relative changes in daily trading volume:

- **Stable (Low Risk):** Daily volume change between -25% and \+25% compared to 7-day moving average
- **Moderate Risk:** Daily volume change between -40% to -25% or \+25% to \+40%
- **High Risk:** Daily volume change exceeding ±40%
- Large increases or decreases in volume are flagged for further review.

## Rate Limits and Notes

- CoinGecko’s public API supports 5–15 calls per minute.
- No API key required.
- Data is refreshed once daily, aligned with other Stress Test metrics.
- Volume data reflects aggregated exchange reporting and may vary slightly between sources.

## Last Word

- Daily trading volume is a valuable proxy for market interest, redemption flows, and emerging liquidity pressures.
- Tracking volume alongside price and liquidity data helps create a more complete risk profile for each stablecoin.