---
title: "Get Stablecoin Conversion Rates"
sidebarLabel: "GET /rates"
---
Retrieve the latest conversion rates for supported stablecoins (e.g., USDC, USDT, DAI) relative to USD.

## 📄 Endpoint

```http
Endpoint: GET /rates
```

**_Note_**:

- The full request would be: GET https://api.stablecraft.io/v1/rates
- You call it with a Bearer token in the header
- The server responds with live (or simulated) stablecoin conversion rates

## 🔐 Authentication

Include your API key as a Bearer token in the request header:

```
 Authorization: Bearer YOUR_API_KEY
```

## 📥 Sample Request

```bash
curl https://api.stablecraft.io/v1/rates \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Or using JavaScript:

```javascript
fetch('https://api.stablecraft.io/v1/rates', {
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
  "rates": {
    "USDC": 1.00,
    "USDT": 0.9998,
    "DAI": 1.0012
  },
  "timestamp": "2025-04-26T19:00:00Z"
}
```

- rates: A map of stablecoin symbols to their USD conversion rates.
- timestamp: ISO timestamp indicating when the rates were last updated.

## ⚠️ Notes

- Rates are refreshed every 60 seconds.
- Values may differ slightly from centralized exchanges due to on-chain pricing sources.