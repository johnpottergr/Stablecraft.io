---
title: "Sentiment Analysis"
sidebarLabel: "Sentiment"
description: "Monitor crypto sentiment trends for stablecoins using LunarCrush's API as part of the Stress Test framework."
slug: "/stress-test/sentiment-analysis"
---

# Sentiment Analysis

The text below documents how we retrieve and evaluate sentiment trends for major stablecoins to enhance early warning detection within the Stress Test system.

**We use LunarCrush’s API to track social and market sentiment, which is a supplemental indicator of potential risk changes not immediately visible through on-chain metrics alone.**

## Purpose

Social sentiment can shift ahead of price action or liquidity movements.

Tracking sentiment provides additional context for understanding potential risks associated with market panic, loss of confidence, or rumors that affect stablecoin stability.

## API Endpoint

**Endpoint**:

```bash
GET https://api.lunarcrush.com/v2?data=assets&key=YOUR_API_KEY&symbol=USDC,DAI,USDT,TUSD,FRAX
```

**Authentication:**

An API key is required; free and paid tiers are available through your LunarCrush account.

## Example Query (cURL)

```bash
curl -X GET "https://api.lunarcrush.com/v2?data=assets&key=YOUR_API_KEY&symbol=USDC,DAI,USDT,TUSD,FRAX"
```

## Example Response (truncated)

```json
{
  "data": [
    {
      "symbol": "USDC",
      "galaxy_score": 60,
      "alt_rank": 350,
      "social_volume": 1200,
      "social_score": 7500,
      "price_score": 52
    },
    ...
  ]
}
```

## Important Fields

**Field**            	                **Purpose**

- galaxy_score	     A composite metric combining price, volume, and social sentiment
- social_volume	     Number of social posts mentioning the asset
- social_score	     Quality-adjusted engagement score for the asset

## Sentiment Evaluation Criteria

We use the following basic interpretation model:

- **Low Risk **(Positive Sentiment): Galaxy Score ≥ 50
- **Moderate Risk **(Neutral Sentiment): Galaxy Score between 30–50
- **High Risk** (Negative Sentiment): Galaxy Score ≤ 30
- Stablecoins with consistently low Galaxy Scores are flagged for review.

## Rate Limits and Notes

- Free Tier: 1,000 requests per day.
- Update Frequency: Once daily pull for each stablecoin tracked.
- Caveat: Social sentiment may lag in impact or reflect false positives; treated as a secondary signal, not a primary risk trigger.

## Last Word

- Social sentiment analysis offers insights into emerging risk factors for stablecoins, beyond price and liquidity.
- Using LunarCrush data enables the Stress Test system to capture early signs of market stress that may not yet be visible on-chain.

---