---
title: List Wallets
sidebarLabel: GET /wallets
---

# List Wallets

Retrieve all wallets associated with your Stablecraft account, along with their balances and asset types.

---

## 📄 Endpoint

```http
GET /wallets
```

## 🔐 Authentication
Include your API key as a Bearer token in the request header:

```http
Authorization: Bearer YOUR_API_KEY
```
## 📥 Sample Request
```bash
curl https://api.stablecraft.io/v1/wallets \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Or using JavaScript:
``` Javascript
fetch('https://api.stablecraft.io/v1/wallets', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 📤 Sample Response
```json
[
  {
    "id": "wallet_123",
    "asset": "USDC",
    "balance": "1245.75",
    "created_at": "2024-03-12T10:00:00Z"
  },
  {
    "id": "wallet_456",
    "asset": "DAI",
    "balance": "987.60",
    "created_at": "2024-04-01T09:30:00Z"
  }
]
```

