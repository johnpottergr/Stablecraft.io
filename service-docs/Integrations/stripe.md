---
title: Stripe Crypto Integration
sidebarLabel: Stripe
---

# Stripe Crypto Integration (Early Access)

Stripe has introduced limited support for stablecoin-based payments, enabling businesses to accept or pay out using **USDC** on selected blockchains such as **Ethereum**, **Solana**, and **Polygon**.

While Stripe's crypto features are still expanding, Stablecraft can help you prepare your platform for stablecoin-enabled checkout or payout options.

---

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

---

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
- Crypto payouts are subject to compliance reviews and approval by Stripe.
- Stablecoin checkout functionality may not be available for all businesses or regions yet.
- Gas fees may be absorbed by the customer or business depending on configuration.

## 📚 Additional Resources
[Stripe Crypto Overview](https://stripe.com/docs/crypto)
[Stripe Payouts API Reference](https://stripe.com/docs/api/payouts)
