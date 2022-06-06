import "./App.css";
import { useEffect, useState } from "react";
import { startSdk } from "./helpers";
import { getAccountBalances } from "./helpers/getbalance";

function App() {
  const [address, setAddress] = useState("0x");
  const [balance, getBalance] = useState("0x");

  useEffect(() => {
    startSdk().then((sdk) => {
      if (sdk) {
        const { state } = sdk;
        setAddress(state.state$._value.wallet.address);
      }
      
    });
    getAccountBalances().then((sdk) => {
      if (sdk) {
        const { state } = sdk;
        getBalance(state.state$._value.wallet.address);
      }
      
    });
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p> Address is : {address}</p>
        <p> Get Balance is : {balance}</p>
      </header>
    </div>
  );
}

export default App;