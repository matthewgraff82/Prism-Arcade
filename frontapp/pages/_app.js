import React, {useState} from 'react';
import './App.css';
import { ethers } from "ethers";



 function App() {
  let [currentAccount, setCurrentAccount] = useState('');
  


// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
  const connectWallet = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const s = provider.getSigner();
    setSigner(s)
    
    const address = await s.getAddress();
    console.log(address)
    setCurrentAccount(address);
  
  

  }


  


  
  

  return (
    <main>
      {!currentAccount && <button onClick={connectWallet}>ConnectWallet</button>}
    {currentAccount && <h1>Wallet Connected {currentAccount}</h1>}
    </main>
  );
}

export default App;