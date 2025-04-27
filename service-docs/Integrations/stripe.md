---
title: "Stripe Crypto Integration (Early Access)"
sidebarLabel: "Stripe"
description: "Possible Stripe setup for stablecoin-enabled checkout and payout options"
sidebar_position: 3
slug: /stripe-integration
---
Stripe has introduced limited support for stablecoin-based payments, allowing businesses to accept or make payments using **USDC** on select blockchains, including **Ethereum**, **Solana**, and **Polygon**.

While Stripe's crypto features are expanding, Stablecraft can help you prepare your platform for stablecoin-enabled checkout or payout options.

## 🚀 Stripe Crypto Overview

- **Supported Asset**: USDC
- **Supported Blockchains**: Ethereum, Solana, Polygon
- **Primary Use Cases**:
  - Crypto payouts to vendors or freelancers
  - (Future) Accepting stablecoin payments at checkout (limited access currently)

---

## 🔗 How Our Integration Support Works

1. **Apply for Stripe Crypto Access**
   Not all Stripe accounts have crypto access by default. We'll guide you through the application process if needed.
2. **Set Up Payout Capabilities**
   If you're paying vendors or partners, we help configure Stripe Crypto payouts using the Stripe API.
3. **Prepare for Stablecoin Checkout**
   For businesses interested in stablecoin checkout, we help:
   - Configure Web3-ready wallet fields
   - Manage KYC and compliance checks
   - Monitor Stripe updates for expanding stablecoin features

## 🧩 Example: Initiating a Crypto Payout via Stripe API

Once your account is enabled for crypto, sending a USDC payout looks like this:

```bash
curl https://api.stripe.com/v1/payouts \
  -u YOUR_SECRET_KEY: \
  -d amount=2500 \
  -d currency=usd \
  -d method=crypto \
  -d destination="crypto_wallet_address_here"
```

**Note**: The destination field requires a properly whitelisted crypto address through Stripe's platform.

## ⚠️ Important Considerations

- Crypto payouts are subject to Stripe's review and approval for compliance purposes.
- Stablecoin checkout functionality may not be available for all businesses or regions yet.
- Depending on the configuration, the customer or business may absorb gas fees.

## 📚 Additional Resources

[Stripe Crypto Overview](https://stripe.com/docs/crypto)
[Stripe Payouts API Reference](https://stripe.com/docs/api/payouts)