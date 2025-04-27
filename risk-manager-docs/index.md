---
title: "Stablecoin Risk Manager"
sidebarLabel: "Risk Manager"
description: "Monitor stablecoin risks by tracking pool liquidity, peg stability, audit recency, and known risk factors across Uniswap, SushiSwap, and Curve."
slug: "/risk-manager"
---

# Stablecoin Risk Manager

**The Risk Manager tracks critical stability indicators for major stablecoins, combining decentralized liquidity data with audit history and known risk factors.**

This section provides daily insights into:

- **Peg Stability**: Detects deviations from \$1.00 USD across major stablecoins.
- **Total Value Locked (TVL)**: Measures available stablecoin liquidity on Uniswap, SushiSwap, and Curve.
- **Audit Status**: Summarizes the latest available audit reports.
- **Red Flags**: Highlights known issues such as depegs, liquidity risks, or governance concerns.

Data is sourced through a combination of public APIs and manual audit tracking:

| **Data Field**       | **Source**                                      |
| :------------------- | :---------------------------------------------- |
| Peg Stability        | CoinGecko Free API                              |
| Pool Liquidity (TVL) | Uniswap Subgraph, SushiSwap Subgraph, Curve API |
| Last Audit           | Manual Database                                 |
| Red Flags            | Manual Database                                 |

## Stablecoins Monitored

- USDC (USD Coin)
- DAI (Dai)
- USDT (Tether)
- TUSD (TrueUSD)
- FRAX (Frax)

## Data Update Frequency

- Peg prices and pool liquidity: **Daily**
- Audit and red flag information: **Quarterly** or upon significant events.

Please navigate the detailed pages in the sidebar for API configurations and data integration examples.

---