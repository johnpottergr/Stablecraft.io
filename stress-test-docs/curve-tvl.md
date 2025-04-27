---
title: "TVL Monitoring (Curve)"
sidebarLabel: "TVL (Curve)"
description: "Monitor stablecoin pool liquidity (TVL) on Curve Finance using Curve's public API as part of the Stress Test framework."
sidebar_position: "6"
slug: "/stress-test/curve-tvl"
---
The text below documents how we retrieve and monitor stablecoin pool liquidity (Total Value Locked, or TVL) on Curve Finance as part of the Stress Test system.

**Monitoring liquidity across stablecoin pools provides important insights into potential redemption events, liquidity withdrawals, or changes in user confidence.**

We use Curve’s public API to retrieve pool liquidity data daily.

## Purpose

Tracking TVL changes on Curve enables us to detect:

- **Large liquidity withdrawals (early signs of stress or redemption events)**
- **Shrinking pool size indicating potential depegging risk**
- **Abnormal shifts in liquidity across major stablecoin pools**

TVL metrics complement price, volume, and sentiment indicators in the Stress Test framework.

## API Endpoint

**Endpoint**:

```bash
GET https://api.curve.fi/api/getPools/ethereum/main
```

**Authentication:**

- None required.

## Example Query (cURL)

```bash
curl -X GET "https://api.curve.fi/api/getPools/ethereum/main"
```

## Example Response (truncated)

```json
{
  "data": {
    "poolData": [
      {
        "name": "3pool",
        "coins": ["DAI", "USDC", "USDT"],
        "usdTotal": 1450000000.00
      },
      {
        "name": "FRAX3CRV",
        "coins": ["FRAX", "DAI", "USDC", "USDT"],
        "usdTotal": 870000000.00
      }
    ]
  }
}
```

## Important Fields

**Field**	**Purpose**

- name	    Pool name (e.g., 3pool, FRAX3CRV)
- coins	    Stablecoins in the pool
- usdTotal	Total

## TVL Evaluation Criteria

We track daily percentage changes in pool TVL:

- **Stable (Low Risk):** Daily TVL change between 5% and \+5%
- **Moderate Risk**: Daily TVL change between -10% and -5%, or between \+5% and \+10%
- **High Risk:** Daily TVL change exceeding ±10%.
- Significant liquidity withdrawals are flagged for review.

## Rate Limits and Notes

- No authentication key required.
- Curve recommends a moderate polling frequency (we query once daily).
- The data reflects all Curve stablecoin pools combined.

**Common stablecoin pools monitored include:**

- 3pool (DAI/USDC/USDT)
- FRAX3CRV (FRAX/DAI/USDC/USDT)
- Others, depending on the current Curve deployment and market usage

## Last Word

- Monitoring TVL across Curve’s stablecoin pools is critical to identifying emerging liquidity risks.
- Tracking withdrawals and pool contraction in near real-time strengthens the ability to detect early signs of stablecoin instability.