import "./App.css";
import { useEffect, useState } from "react";
import { connectMetamask } from "./helpers";
import { fetchData } from "./helpers";
const { DEFAULT_NETWORK, BANNER } = require("./.secret.json");




const MyApp = ({ Component, pageProps }) => {
  const [, setNetwork] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [connectted, setConnectted] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  

  function App() {
    const [address, setAddress] = useState("0x");
    useEffect(() => {
      const promise = fetchData();
      promise.then((data) => {
        setAddress(data.user);
      });
    }, []);

  function accountChanged(_accounts) {
    // Time to reload your interface with accounts[0]!
    setAddress(_accounts.length >= 1 ? _accounts[0] : "no account");
  }

  function networkChanged(_chainId) {
    // Time to reload your interface with the new networkId
    setNetwork(_chainId);
    setCorrectNetwork(_chainId === DEFAULT_NETWORK ? true : false);
  }



  const connect = async () => {
    const { address, network } = await connectMetamask(
      accountChanged,
      networkChanged
    );
    if (address === "no account" || address === "no metamask") {
    } else {
      setNetwork(network);
      setAddress(address);
      setConnectted(true);
      setHasMetamask(true);
    }
    setCorrectNetwork(network === DEFAULT_NETWORK ? true : false);
    if (correctNetwork) {
      console.log("correct network", network);
    }
  };

  return (
    <div className="App">
      <header className="App-header">

      {!correctNetwork && `${BANNER} `}
      {!connectted && hasMetamask && (
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={connect}
                    >
                      connect 
                    </button>
                  </div>
                )}
              {connectted && correctNetwork && (
                  <div>
                    <p>{address}</p>
                  </div>
                )}


                {!hasMetamask && (
                  <>
                    <a
                      href="/"
                      class="btn btn-primary"
                    >
                      connect
                    </a>
                    <div>
                      <div >
                        <p>Please install Metamask</p>
                        <div >
                          <a
                            href="https://metamask.io/"
                            
                          >
                            Metamask 
                          </a>
                          <a href="/" class="btn">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
      </header>
    </div>
  );
}
}
export default MyApp;