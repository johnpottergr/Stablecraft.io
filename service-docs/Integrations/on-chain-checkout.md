---
title: "On-Chain Checkout Setup"
sidebarLabel: "On-Chain Checkout"
description: "Directly send stablecoins to a smart contract or wallet address you control"
sidebar_position: 5
slug: /on-chain-checkout
---
We offer on-chain checkout integration if you prefer full Web3 control over your payments.

An on-chain checkout flow allows customers to send stablecoins (**USDC**, **DAI**, or **USDT**) directly to a smart contract or wallet address you control, without relying on third-party payment processors like Coinbase Commerce or Stripe.

## 🚀 How On-Chain Checkout Works

1. **Customer Initiates Payment:** Customers connect their Web3 wallet (e.g., MetaMask, WalletConnect) to your site.
2. **Transaction Sent to Blockchain:** The customer approves and sends a stablecoin payment to your receiving address or smart contract.
3. **Confirmation:** Payment confirmation occurs on-chain and is visible through blockchain explorers, such as Etherscan.
4. **Optional:** Smart Contract Logic:  \\You can build custom smart contracts to handle additional logic:
   - Auto-releasing goods/services after payment
   - Issuing receipts (NFTs or otherwise)
   - Handling refunds under conditions

## 🧩 Requirements

- A deployed smart contract OR a verified stablecoin-receiving wallet.
- A front-end integration using Web3 libraries like [ethers.js](https://docs.ethers.org/v5/) or [wagmi.sh](https://wagmi.sh/).
- (Optional) A backend server will monitor payment confirmations if automation is needed.

## ✨ Advantages of On-Chain Checkout

- **No Middlemen**: Full ownership and transparency over transactions.
- **Lower Fees**: Avoid traditional processor fees (only pay gas fees).
- **Programmability**: Customize the payment flow as needed.

## ⚠️ Things to Consider

- Customers must have a funded Web3 wallet.
- Gas fees may apply depending on the blockchain used.
- Smart contract development and audits are recommended for complex payment flows.

## 📚 Next Steps

Contact us to design a custom on-chain checkout flow that matches your business needs, risk profile, and customer experience goals.