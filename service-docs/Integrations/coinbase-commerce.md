---
title: Coinbase Commerce Integration
sidebarLabel: Coinbase Commerce
---

# Integrating Coinbase Commerce

We help you connect your store or application to Coinbase Commerce to accept USDC and other stablecoins.

Our integration covers everything from API credential setup to webhook configuration for real-time payment tracking.

---

## 🛠 Integration Flow

1. **Generate API Keys**
   Create API credentials from [Coinbase Commerce](https://commerce.coinbase.com).

2. **Add Webhook URL**
   Set up your webhook to receive payment confirmation and status updates.

3. **Configure Accepted Assets**
   Select which stablecoins to accept (e.g., **USDC**, **DAI**, **USDT**).

4. **Optional: Wrap with a Custom Checkout Handler**
   We can build a secure `POST /checkout` endpoint in your app to initiate Coinbase Commerce checkouts dynamically.

---

## 📦 Example: Create a Checkout

When creating a checkout session, send a request with the following payload:

```json
{
  "name": "T-shirt",
  "price": "25.00",
  "currency": "USD"
}
```
### Sample Response:
```
{
  "id": "checkout_ABC123",
  "hosted_url": "https://commerce.coinbase.com/checkout/abc123"
}
```
- The `hosted_url` is the secure payment page customer can use to complete their transaction.
- The `id` can be used to track payment status or query transaction details later.


## 📚 Additional Notes
- Coinbase Commerce handles currency conversion automatically if the customer chooses to pay in a supported stablecoin.

- You can track webhook events like charge:confirmed to update order statuses in your system.






