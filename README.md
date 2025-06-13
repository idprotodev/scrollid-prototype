
# ScrollID Token (SID)

> 🧪 A fully functional prototype for identity-token UX exploration using the ENS domain `scrollid.eth`.

---

## 🔍 Overview

**ScrollID Token (SID)** is an experimental ERC-20 token and identity UX demo centered around the ENS name `scrollid.eth`.  
It explores wallet binding, identity resolution, and claim interactions designed for the Scroll L2 ecosystem or any identity-aware infrastructure on-chain.

This prototype is a complete proof-of-concept (PoC), combining:
- ERC-20 smart contract (`ScrollIDToken.sol`)
- React-based UI with ENS name resolution
- ENS-linked identity (`you.scrollid.eth`)
- Simulated token claim process

---

## 💡 Use Case Highlights

1. **Verified Wallet–ENS Linking**  
   Connect wallet addresses to identities like `alice.scrollid.eth` and simulate verified binding.

2. **ZK-Ready Attestation Anchors**  
   Use SID as a mock anchor for zk identity attestations or delegated rights.

3. **ENS-Based Login UX**  
   Demonstrates how ENS + MetaMask integration creates secure, human-readable login flows.

4. **Session or Role Tokens**  
   Model short-term token issuance for roles, delegation, or identity-gated applications.

---

## 🧪 Live Demo & Identity Domain

- 🔗 ENS: [`scrollid.eth`](https://app.ens.domains/name/scrollid.eth)
- 💻 Demo UI: [https://scrollid-ui.netlify.app](https://scrollid-ui.netlify.app)
- 🧬 GitHub: [github.com/your-org/scrollid-prototype](https://github.com/your-org/scrollid-prototype)

> ✅ This prototype is fully tied to the ENS domain `scrollid.eth`.  
> Without ownership of this name, this identity resolution flow cannot be replicated.  
> The ENS text records include contact, GitHub, and demo URLs for verification.

---

## 🛠 Tech Stack

| Layer         | Tech                          |
|---------------|-------------------------------|
| Smart Contract | Solidity (ERC-20, OpenZeppelin) |
| Frontend       | React + TailwindCSS + Ethers.js |
| Hosting        | Netlify (optionally tied to ENS) |
| ENS Support    | Forward + Reverse Resolution    |

---

## ⚙️ Local Development

```bash
npm install
npm run dev
```

Smart contract can be deployed via Remix or Hardhat from `contracts/ScrollIDToken.sol`.

---

## 📩 Contact & Ownership

If you are a member of the **Scroll** team or a contributor to ENS-based identity protocols,  
and wish to acquire or collaborate around `scrollid.eth`, please use the email address listed in the ENS text record.

---

## ⚠️ Disclaimer

This is a non-official prototype. It is not affiliated with Scroll or ENS.  
All code is provided for educational and experimental purposes under the MIT license.

---
