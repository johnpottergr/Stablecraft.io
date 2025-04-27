---
title: "Send Payment"
sidebarLabel: "POST /transactions"
---

# Send a Stablecoin Payment

Create and send a stablecoin transaction from one of your wallets to a specified recipient address.

## 📄 Endpoint

```http
POST /transactions
```

## 🔐 Authentication

```http
Authorization: Bearer YOUR_API_KEY
```

## 📥 Sample Request

```bash
curl -X POST https://api.stablecraft.io/v1/transactions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from_wallet_id": "wallet_123",
    "to_address": "0xabc123def4567890abc123def4567890abc123de",
    "amount": "100.00",
    "asset": "USDC"
  }'
```

Or using JavaScript:

```javascript
fetch('https://api.stablecraft.io/v1/transactions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from_wallet_id: "wallet_123",
    to_address: "0xabc123def4567890abc123def4567890abc123de",
    amount: "100.00",
    asset: "USDC"
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

## 📤 Sample Response

```json
{
  "id": "txn_789",
  "status": "pending",
  "asset": "USDC",
  "amount": "100.00",
  "from_wallet_id": "wallet_123",
  "to_address": "0xabc123def4567890abc123def4567890abc123de",
  "created_at": "2025-04-26T19:30:00Z"
}
```

## ⚠️ Notes

- The transaction status will initially be pending.
- Webhook events (optional) can notify your system when the transaction is confirmed on-chain.
- Amounts must match the asset’s decimal conventions (e.g., 2 decimals for USDC).