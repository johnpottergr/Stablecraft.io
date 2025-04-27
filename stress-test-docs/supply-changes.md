---
title: Supply Changes Monitoring
sidebarLabel: Supply Changes
description: Track changes in stablecoin circulating supply using CoinGecko's API as part of the Stress Test framework.
slug: /stress-test/supply-changes
---

# Supply Changes Monitoring

The text below explains how we monitor changes in stablecoin circulating supply as part of the Stress Test system.

Large shifts in supply — either minting (expansion) or burning (contraction) — can serve as an early indicator of stress events, liquidity shifts, or issuer-driven interventions.

We use CoinGecko’s API to retrieve stablecoin supply data on a daily basis.

---

## Purpose

Monitoring circulating supply changes can highlight:
- Growing demand (supply expansion)
- Loss of trust or redemption pressure (supply contraction)
- Anomalous minting or burning patterns that may precede depegs or liquidity crises
The supply-changes metric complements price-based and liquidity-based stress indicators.

---

## API Endpoint

**Endpoint**:
```bash
GET https://api.coingecko.com/api/v3/coins/{id}
```

**Authentication:**
- None required.

## Example Query (cURL)

```bash
curl -X GET "https://api.coingecko.com/api/v3/coins/usd-coin"

curl -X GET "https://api.coingecko.com/api/v3/coins/dai"

curl -X GET "https://api.coingecko.com/api/v3/coins/usdt"

curl -X GET "https://api.coingecko.com/api/v3/coins/trueusd"

curl -X GET "https://api.coingecko.com/api/v3/coins/frax"

```

## Example Response (truncated)

```json
{
  "id": "usd-coin",
  "symbol": "usdc",
  "market_data": {
    "circulating_supply": 28500000000,
    "total_supply": 30000000000
  }
}
```

## Important Fields

**Field**	                        **Purpose**
- market_data.circulating_supply	Number of tokens currently circulating
- market_data.total_supply	        Total tokens issued (including reserved or non-circulating tokens)

## Supply Change Evaluation Criteria

We monitor the daily percentage change in circulating supply:
- Stable (Low Risk): Daily change between -0.5% and +0.5%
- Moderate Risk: Daily change between -1.0% and -0.5%, or between +0.5% and +1.0%
- High Risk: Daily change exceeding ±1.0%
Sudden sharp contractions (burns) are weighted more heavily than expansions.

## Rate Limits and Notes

- CoinGecko’s public API allows 5–15 calls per minute.
- We update daily to align with other Stress Test metrics.
- No authentication key is needed for standard usage.

## Last Word

- Tracking stablecoin supply changes provides another valuable layer of visibility into market trust dynamics.
- While supply expansion is typically healthy, sudden contractions may reflect redemption surges or liquidity withdrawal events requiring close attention.
---