---
title: "Stress Test Docs"
description: "API documentation for calculating dynamic risk scores for stablecoins based on peg deviation, liquidity, volume, collateral quality, and other adjustable risk factors."
sidebar_position: "1" 
slug: "/stress-test-docs"
---
The Stablecoin Stress Test API dynamically calculates risk scores for major stablecoins based on real-time (or simulated) data and customizable risk factor weights.


Use this API to monitor stablecoin stability, detect emerging risks, and fine-tune assessment models based on your own risk preferences.

## Risk Factors
Each stablecoin risk score is calculated from the following factors:

| Factor                 | Description                                           |
| :--------------------- | :---------------------------------------------------- |
| **Peg Deviation**      | Magnitude and frequency of price drifting from \$1.00 |
| **Volume Volatility**  | Variance in trading volume over time                  |
| **Liquidity Change**   | TVL shifts across key pools and chains                |
| **Collateral Quality** | Risk level of the assets backing the stablecoin       |
| **Sentiment Analysis** | Social/media signals about stability or risk events   |

Each factor can be individually weighted, and total weighting must equal 100%.

## Endpoints

### GET `/stress-test/scores`
- Returns the current risk scores for all tracked stablecoins.

#### Example Response:
```json
[
  {
    "name": "USDC",
    "price": 1.00,
    "risk_level": "Moderate",
    "risk_score": 10.7,
    "collateral_summary": "100% short-term U.S. Treasuries"
  },
  {
    "name": "DAI",
    "price": 1.00,
    "risk_level": "Low",
    "risk_score": 9.6,
    "collateral_summary": "Multi-collateral: ETH, USDC, others"
  }
]
```

### GET `/stress-test/weights`
- Returns the current weighting setup for each risk factor.

#### Example Response:
```json
{
  "peg_deviation": 25,
  "volume_volatility": 20,
  "supply_changes": 15,
  "liquidity_change": 20,
  "collateral_quality": 15,
  "sentiment_analysis": 5
}
```

### POST /stress-test/weights
- Allows updating the custom risk factor weights.
  _(Admin access required.)_

**Payload Example:**
```json
{
  "peg_deviation": 30,
  "volume_volatility": 15,
  "supply_changes": 15,
  "liquidity_change": 25,
  "collateral_quality": 10,
  "sentiment_analysis": 5
}
```

## Notes
**Risk Score Ranges:**

- 0–10 → Low Risk
- 10–20 → Moderate Risk
- 20\+ → High Risk

**Price Source:**
- Prices are fetched from on-chain oracles and major exchanges.

**Collateral Data:**
- Updated periodically based on issuer disclosures and third-party audits.

**Refresh Interval:**
- Risk scores are recalculated hourly or on major data events.