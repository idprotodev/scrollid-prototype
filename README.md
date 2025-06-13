# ScrollID – ENS-Integrated Identity Layer for the Scroll Ecosystem

> A composable, zero-dependency identity token interface for Scroll-native applications.

---

## 🌐 What is ScrollID?

**ScrollID** is a lightweight identity token prototype, structured for integration into Scroll-based apps. It combines:

- A dedicated ENS domain: `scrollid.eth`
- A fully functional UI demo (React + Ethers.js)
- An ERC-compatible token contract
- ENS-linked metadata (GitHub, demo, contact)

This repository consolidates identity-related components in one place, enabling experiments around ZK-based identity, wallet resolution, and session-level delegation — without introducing backend dependencies.

---

## 🔗 Live Resources

- ENS domain: [`scrollid.eth`](https://app.ens.domains/name/scrollid.eth)
- UI Demo: [scrollid-ui.netlify.app](https://scrollid-ui.netlify.app)
- GitHub repo: [ScrollID Prototype](https://github.com/idprotodev/scrollid-prototype)

![ScrollID Demo](./assets/scrollid_demo.png)

> ENS `text-records` are configured with relevant metadata (UI, source, contact).

---

## 💡 Identity UX Possibilities

ScrollID is intended to showcase how minimal, trustless identity layers can support:

- **ENS-based wallet identity resolution**  
  e.g. `alice.scrollid.eth` mapped to on-chain activity

- **ZK attestation anchors**  
  Integrates with verifiable credentials and account abstraction frameworks

- **Ephemeral session identity**  
  Non-permanent wallet-linked identities for delegated permissions

- **Token-gated experiences**  
  Use SID tokens to access features within Scroll-native dapps

---

## ⚙️ Tech Stack

| Component     | Stack                            |
|---------------|----------------------------------|
| Smart Contract| ERC20 via OpenZeppelin           |
| Frontend      | React + TailwindCSS + Ethers.js  |
| Hosting       | Netlify                          |
| ENS Support   | Records + reverse resolution     |

---

## 🧪 Project Notes

This project is unaffiliated with Scroll or its foundation.  
It was developed as a technical experiment to illustrate identity layering in ZK-rollup environments using ENS primitives.

No user data is collected.  
No backend services are used.  
Everything is frontend-only and open source.

---

## ℹ️ Additional Context

`scrollid.eth` was reserved to prevent namespace collision and to coordinate the demo, UI, and records consistently.

While this repository is public, its components (ENS, UI, contract) are structured to work together out-of-the-box.  
It may serve as a template, reference, or potential drop-in layer — depending on the direction of identity within Scroll.

---
