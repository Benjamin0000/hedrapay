# 🚀 HedraPay

<p align="center">

### **Real-World Bill Payments Powered by Hedera**

*Transforming HBAR into a practical payment method for everyday services.*

</p>

---

## 🌍 Overview

HedraPay is a Web3 payment platform that demonstrates how **HBAR** can be used beyond trading and speculation.

The platform enables users to pay for real-world services such as:

* 📱 Airtime
* 📶 Mobile Data
* ⚡ Electricity
* 📺 TV Subscriptions
* 🌐 Internet Services

using the **Hedera Network**.

Instead of interacting directly with utility providers from the frontend, HedraPay uses an **event-driven architecture** where users interact with Hedera smart contracts, while an off-chain backend securely fulfills the requested services through external payment providers.

This project was built as a native Hedera application prototype for the **Hedera Thrive Program**.

---

# ✨ Vision

HedraPay transforms **HBAR** from a digital asset into a practical payment method for everyday services.

By combining **Hedera Smart Contracts**, **Mirror Nodes**, and an **event-driven backend**, the platform creates a transparent, secure, and scalable infrastructure for real-world payments.

---

# 🎯 Current Prototype

The current version demonstrates:

* Modern responsive UI
* Premium landing page
* Dashboard experience
* Complete payment flows
* Multi-country support interface
* Wallet connection flow (UI)
* Transaction history interface
* Rewards interface
* End-to-end user experience

The current prototype focuses on demonstrating the product experience while the backend integrations and live blockchain interactions are planned for subsequent milestones.

---

# 🏗 System Architecture

HedraPay follows an **event-driven architecture**.

Instead of allowing the frontend to communicate directly with utility provider APIs, every payment request begins on the Hedera blockchain.

The blockchain acts as the **source of truth**, while backend services listen for smart contract events and execute the appropriate real-world payment.

```text
                    USER
                      │
                      ▼
            Connect Hedera Wallet
                      │
                      ▼
             Select Bill Service
                      │
                      ▼
        Submit Payment Transaction
          (HBAR Smart Contract)
                      │
                      ▼
      Smart Contract emits PaymentRequested
                      │
                      ▼
             Hedera Mirror Node
                      │
                      ▼
          Backend Event Listener
                      │
            Verify Transaction
                      │
        Execute Utility Provider API
                      │
          Airtime / Electricity
        TV / Internet / Data
                      │
                      ▼
         Update Payment Status
                      │
                      ▼
          User Receives Confirmation
```

---

# 📡 Event-Driven Processing

Every payment begins with an on-chain transaction.

After a user submits a payment, the smart contract emits a **PaymentRequested** event.

The backend continuously monitors Hedera through the Mirror Node APIs.

Once the transaction has been verified, the backend:

* Validates the request
* Maps the requested service
* Executes the correct provider API
* Stores provider responses
* Updates payment records
* Notifies the user

This architecture provides:

* Transparent payment verification
* Reliable asynchronous processing
* Blockchain auditability
* Separation of concerns
* Easy integration with multiple payment providers

---

# 📜 Smart Contract Responsibilities

The Hedera smart contract is responsible for:

* Accepting HBAR payment requests
* Recording payment intent
* Emitting payment events
* Maintaining immutable payment history
* Serving as the on-chain source of truth

The smart contract intentionally **does not** communicate with external APIs.

External integrations are performed exclusively by backend services after successful blockchain verification.

---

# ⚙ Backend Responsibilities

The backend acts as the bridge between Hedera and utility providers.

Responsibilities include:

* Listening for smart contract events
* Monitoring Hedera Mirror Nodes
* Verifying payment finality
* Mapping providers
* Calling external payment APIs
* Recording provider responses
* Updating payment status
* Retry handling
* Operational logging
* Analytics

---

# 💎 Planned Smart Contract Events

Future versions of HedraPay are expected to emit events similar to:

* `PaymentRequested`
* `PaymentCompleted`
* `PaymentFailed`

These events allow backend services to securely process payments while maintaining an auditable on-chain record.

---

# 🚀 Features

### User Experience

* Responsive Design
* Modern Dashboard
* Country Selection
* Beautiful Landing Page
* Transaction History
* Rewards Dashboard

### Payment Services

* Airtime
* Mobile Data
* Electricity
* Internet
* TV Subscription

### Hedera Integration (Planned)

* Hedera Wallet Connection
* HBAR Payments
* HTS Integration
* Mirror Node Integration
* Smart Contracts
* Event-driven Processing

---

# 🛠 Technology Stack

## Frontend

* React
* Vite
* React Router
* Tailwind CSS
* Lucide React

## Blockchain

* Hedera
* HBAR
* Hedera Smart Contracts
* Hedera Mirror Nodes

## Backend (Planned)

* Laravel / Node.js
* Event Listener
* Utility Provider APIs
* Queue Workers
* Webhooks

---

# 📁 Project Structure

```text
src/
│
├── components/
│   ├── landing/
│   ├── layout/
│   ├── sidebar/
│   └── ui/
│
├── pages/
│   ├── Landing.jsx
│   ├── Dashboard.jsx
│   ├── Airtime.jsx
│   ├── Data.jsx
│   ├── Electricity.jsx
│   ├── Internet.jsx
│   ├── TvSubscription.jsx
│   ├── Rewards.jsx
│   └── Transactions.jsx
│
├── routes/
│
├── assets/
│
└── App.jsx
```

---

# 🗺 Roadmap

## ✅ Phase 1

* Landing Page
* Dashboard
* Payment Interfaces
* Responsive UI
* Product Prototype

---

## 🚧 Phase 2

* HashPack Integration
* Smart Contracts
* HBAR Payments
* Mirror Node Integration
* Event Processing

---

## 🚀 Phase 3

* Utility Provider APIs
* Live Airtime Purchases
* Live Electricity Payments
* TV Subscription Payments
* Internet Services
* Multi-country Expansion

---

## 🌍 Phase 4

* Merchant Payments
* QR Payments
* Cross-border Payments
* Loyalty Rewards
* Cashback
* Referral Program
* Merchant Dashboard
* Mobile App

---

# ⚡ Why Hedera?

HedraPay is designed specifically for Hedera because of its:

* Fast Finality
* Predictable Low Fees
* Enterprise-grade Governance
* High Throughput
* Secure Consensus
* Carbon-negative Network
* Excellent Developer Experience

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/hedrapay.git
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Preview production

```bash
npm run preview
```

---

# 🔮 Future Enhancements

* On-chain Payment Receipts
* Merchant Settlement
* Multi-token Payments
* Stablecoin Support
* Scheduled Payments
* Recurring Bill Payments
* AI-powered Payment Assistant
* Analytics Dashboard
* Payment Notifications
* Cross-chain Settlement
* Developer API

---

# 🤝 Hedera Thrive Program

HedraPay was developed as part of a submission to the **Hedera Thrive Program**.

The project demonstrates how the Hedera network can power real-world financial applications by combining smart contracts, event-driven architecture, and integrations with existing payment infrastructure.

Our long-term vision is to make HBAR a practical payment option for everyday services across multiple countries.

---

# ❤️ Acknowledgements

Special thanks to:

* The Hedera Community
* Hedera Foundation
* Hedera Thrive Program
* Open Source Contributors

for helping developers build the next generation of decentralized applications.

---

# 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">

### 🚀 Built with ❤️ on Hedera

**Making HBAR useful for everyday payments.**

</p>
