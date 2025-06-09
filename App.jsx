import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";

export default function ScrollIDApp() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">ScrollID Token Demo</h1>
      {account ? (
        <p className="text-green-600">Connected: {account}</p>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </div>
  );
}
