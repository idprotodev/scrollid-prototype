# ScrollID Token (SID)

> 🧪 Experimental identity-layer prototype for the Scroll ecosystem.

---

## 🔍 Overview

**ScrollID Token (SID)** is a functional proof-of-concept for decentralized identity UX within the Scroll ecosystem, built on top of ENS and wallet-based authentication. The ENS domain `scrollid.eth` serves as the anchor for this demo, showcasing what a Scroll-native identity system could look like.

This project is **not affiliated** with Scroll or any official entity. It is independently maintained to demonstrate integration potential.

---

## 💡 Potential Use Cases

- **Wallet-based Identity Claiming**  
  Allow users to bind their wallets to `user.scrollid.eth` for easy recognition across Scroll dApps.

- **zkLogin & Delegated Access**  
  Leverage SID for future implementations involving zero-knowledge logins or temporary session identities.

- **Scroll Ecosystem Integration**  
  Provide a ready-to-use identity layer for any dApp needing secure and user-friendly onboarding.

---

## 🛠 Live Demo & Assets

- ENS: [`scrollid.eth`](https://app.ens.domains/name/scrollid.eth)
- UI Demo: [https://scrollid-ui.netlify.app](https://scrollid-ui.netlify.app)
- Source: [GitHub](https://github.com/idprotodev/scrollid-prototype)

![ScrollID Demo](./assets/scrollid_demo.png)

> ENS `text-record` is configured to point to this repository for transparency.

---

## 📦 Tech Stack

| Component     | Tech                            |
|---------------|---------------------------------|
| Smart Contract| ERC-20 (Identity Token)         |
| Frontend      | React + TailwindCSS + Vite      |
| Hosting       | Netlify                         |
| ENS Support   | Reverse resolution + Records    |

---

## 🛡 Disclaimer

This is an independent prototype project, published under MIT license.  
There is no affiliation with Scroll, the Scroll Foundation, or any known entity.

Wallet connection is handled locally by the user via MetaMask.  
No personal data is collected or processed. This is a frontend-only demo.

---

## 📩 Contact

This domain and prototype are independently managed. Interested official parties are welcome to inquire via the ENS contact details available in the ENS `text-record`.

- **Email (via Mailchain):** [idprotodev@mailchain.com](mailto:idprotodev@mailchain.com)

