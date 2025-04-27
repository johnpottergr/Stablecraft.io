---
title: "Peg Deviation Monitoring"
sidebarLabel: "Peg Deviation"
description: "Monitor stablecoin peg stability using CoinGecko's API as part of the Stress Test framework."
sidebar_position: "3"
slug: "/stress-test/peg-deviation"
---
The text below documents how we monitor stablecoin price stability, also known as "peg deviation," as part of the Stress Test system.

**Stablecoins are designed to maintain a 1.00 USD value. Deviations from this peg, even minor ones, can serve as early warning signs of risk events, liquidity strain, or a loss of market confidence.**

We use CoinGecko’s API to retrieve daily stablecoin price data.

## Purpose

Monitoring stablecoin peg deviation enables detection of:

- Market stress affecting stablecoin credibility
- Disruptions in liquidity or arbitrage mechanisms
- Early signs of depegging risk before on-chain liquidity dries up

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
    "current_price": 0.998
  },
  {
    "id": "dai",
    "symbol": "dai",
    "current_price": 1.001
  }
]
```

## Important Fields

**Field**       	                   **Purpose**

- **current_price	** Real-time price of the stablecoin in USD

## Peg Deviation Evaluation Criteria

We track the absolute deviation from \$1.00:

- **Stable (Low Risk):** Price between $0.995 and $1.005
- **Moderate Risk:** Price between $0.990–$0.995 or $1.005–$1.010
- **High Risk:** Price outside $0.990–$1.010
- Prices updated daily are compared to these thresholds to assign a Risk Score.

## Rate Limits and Notes

- CoinGecko’s public API supports 5–15 calls per minute.
- No API key required.
- We perform one daily data pull aligned with other Stress Test metrics.

## Last Word

- Maintaining peg stability is fundamental to a stablecoin’s trustworthiness.
- Continuous daily monitoring of price deviation provides an essential early warning system for potential loss of peg and subsequent liquidity crises.

---