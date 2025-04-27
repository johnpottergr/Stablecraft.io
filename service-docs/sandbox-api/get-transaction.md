---
title: "Get Transaction by ID"
sidebarLabel: "GET /transactions/:id"
description: "Retrieve detailed information about specific stablecoin transactions using their unique transaction ID"
sidebar_position: 2
slug: /get-transaction-by-id
---
Retrieve detailed information about a specific stablecoin transaction by providing its unique transaction ID.

## 📄 Endpoint

```http
GET /transactions/:id
```

- Base URL: https://api.stablecraft.io/v1
- Replace :id with the unique ID of the transaction you want to retrieve.

## 🔐 Authentication

Include your API key as a Bearer token in the request header:

```http
Authorization: Bearer YOUR_API_KEY
```

## 📥 Sample Request

```bash
curl https://api.stablepay.dev/v1/transactions/txn_789 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Or using JavaScript:

```Javascript
fetch('https://api.stablepay.dev/v1/transactions/txn_789', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 📤 Sample Response

```json
{
  "id": "txn_789",
  "status": "confirmed",
  "asset": "USDC",
  "amount": "100.00",
  "from_wallet_id": "wallet_123",
  "to_address": "0xabc123def4567890abc123def4567890abc123de",
  "created_at": "2025-04-26T19:30:00Z",
  "confirmed_at": "2025-04-26T19:35:00Z",
  "transaction_hash": "0xdeadbeef1234567890abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"
}
```

**Field                       Description**

- id:                          Unique identifier for the transaction
- status:                   Current transaction status (pending, confirmed, or failed)
- asset:                    Stablecoin used in the transaction
- amount:                 Amount transferred
- from_wallet_id:     ID of the wallet that sent the transaction
- to_address:           Blockchain address receiving the funds
- created_at:            When the transaction was initiated
- confirmed_at:        When the transaction was confirmed on-chain (if confirmed)
- transaction_hash:  Blockchain hash of the transaction (for explorers)

## ⚠️ Notes

- Based on network conditions, transaction statuses can change from pending to confirmed or failed.
- You can use the transaction_hash to look up the transaction on a blockchain explorer like Etherscan.
- If the transaction ID does not exist, the API returns a 404 Not Found error.