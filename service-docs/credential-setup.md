---
title: API Credential Setup
sidebarLabel: Credentials
---

# API Credential Setup

When integrating with stablecoin services, securely managing your API keys is critical.

We’ll help you create and safely store credentials for:

- **Coinbase Commerce**
- **Stripe**
- **Your Wallet or Smart Contract**

Using environment variables keeps sensitive keys out of your source code and version control systems like Git.

## 🛡 Storing API Keys Securely

Set your keys in your local environment or in a secure `.env` file:

```bash
# Coinbase Commerce
export COINBASE_API_KEY=your_coinbase_api_key_here

# Stripe
export STRIPE_API_KEY=your_stripe_api_key_here

# On-Chain Wallet or Contract (if applicable)
export WALLET_PRIVATE_KEY=your_private_key_here
```
If you're using a .env file, the format is the same:
```
COINBASE_API_KEY=your_coinbase_api_key_here
STRIPE_API_KEY=your_stripe_api_key_here
WALLET_PRIVATE_KEY=your_private_key_here
```
Then load your environment variables into your app securely at runtime.

:::tip
Never hardcode API keys directly into your JavaScript, React, or server files.
:::

## Key Management Best Practices

- Rotate your API keys periodically.
- Limit API key permissions to only what is needed.
- Use different keys for development, staging, and production environments

```


