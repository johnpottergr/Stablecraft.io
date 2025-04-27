---
title: TVL and Yield Monitoring with Curve API
sidebarLabel: TVL and Yield (Curve)
description: Retrieve stablecoin pool liquidity and yield opportunities using the Curve Finance public REST API.
slug: /risk-manager/tvl-curve
---

# TVL and Yield Monitoring with Curve API

This page documents how we retrieve daily stablecoin pool liquidity (TVL) and yield opportunities from Curve Finance.

Curve’s public API provides real-time data on all pools, including total value locked (TVL) and estimated yield (APY).

We parse this data daily to update the Risk Manager’s liquidity metrics and identify current yield opportunities.

---

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
        "symbol": "3CRV",
        "coins": ["DAI", "USDC", "USDT"],
        "usdTotal": 1425000000.00,
        "apys": {
          "crvApy": 0.038,
          "baseApy": 0.012
        }
      },
      {
        "name": "FRAX3CRV",
        "symbol": "FRAX3CRV",
        "coins": ["FRAX", "DAI", "USDC", "USDT"],
        "usdTotal": 870000000.00,
        "apys": {
          "crvApy": 0.045,
          "baseApy": 0.015
        }
      }
    ]
  }
}
```

## Important Fields

  **Field:** 	**Purpose**
- name:	        Pool name (e.g., 3pool, FRAX3CRV)
- coins:	    Stablecoins in the pool
- usdTotal:	    Total value locked (liquidity in USD)
- apys.baseApy:	Base yield excluding CRV rewards
- apys.crvApy:	Additional yield from CRV rewards

## TVL Monitoring Criteria

We track daily TVL changes in stablecoin pools to monitor:
- Liquidity stability
- Major inflows or outflows signaling stress
TVL declines larger than 10% within a day are flagged for review.

## Yield Monitoring Criteria

We track daily yield opportunities:
- Base APY is monitored to understand organic returns.
- CRV Reward APY is noted separately, but not used as the primary risk indicator.
Higher-than-normal APYs may indicate liquidity stress or incentives compensating for risk.

## Rate Limits and Notes

- No hard rate limit published.
- Curve recommends polling no more than once per minute.
- We update once daily to minimize server load.

---