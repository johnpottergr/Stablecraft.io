---
title: "Get Wallet by ID"
sidebarLabel: "GET /wallets/:id"
description: "Retrieve detailed information about a specific wallet by providing its unique wallet ID"
sidebar_position: 3
slug: /get-wallet-by-id
---
Retrieve detailed information about a specific wallet by providing its unique wallet ID.

## 📄 Endpoint

```http
GET /wallets/:id
```

- Base URL: https://api.stablecraft.io/v1
- Replace :id with the unique ID of the wallet you want to retrieve.

## 🔐 Authentication

Include your API key as a Bearer token in the request header:

```bash
Authorization: Bearer YOUR_API_KEY
```

## 📥 Sample Request

```bash
curl https://api.stablepay.dev/v1/wallets/wallet_123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Or using JavaScript:

```Javascript
fetch('https://api.stablepay.dev/v1/wallets/wallet_123', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 📤 Sample Response

```
{
  "id": "wallet_123",
  "asset": "USDC",
  "balance": "1245.75",
  "created_at": "2024-03-12T10:00:00Z",
  "last_activity": "2025-04-26T19:00:00Z"
}
```

## ⚠️ Notes

- If the wallet ID does not exist, the API returns a 404 Not Found error.
- Balances are displayed in native token units.
- last_activity can be null if the wallet has had no transactions yet.