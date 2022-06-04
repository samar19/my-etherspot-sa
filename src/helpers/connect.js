import { Sdk, MetaMaskWalletProvider } from 'etherspot';
import detectEthereumProvider from '@metamask/detect-provider';

import { ethers } from 'ethers'
import { useState } from 'react';




export const ConnectComponent = ({ text }: Props) => {
  const ethereum = window.ethereum
const [account, setAccount] = useState('👻👻👻👻👻👻👻👻👻👻👻👻');
// install metamask
const iMetamask = async () => {
  const provider = await detectEthereumProvider();
  if (provider) {
    console.log(provider)
    startApp(provider); 
  } else {
    console.log('Please install MetaMask!');
  }
}

const startApp = async (provider: ant) => {
  const library = new ethers.providers.Web3Provider(provider)
  const signer = library.getSigner()
  try {
    const addr = await signer.getAddress()
    console.log(addr)
    console.log('signer ', signer)
    setAccount(addr)
  }
  catch (ex) {
    console.log(ex);
  }
}




async function main() {
  if (!MetaMaskWalletProvider.detect()) {
    console.log('MetaMask not detected');
    return;
  }

  const walletProvider = await MetaMaskWalletProvider.connect();

  const sdk = new Sdk(walletProvider, {
    projectKey: '0x3eb8ad8d046491c08bc529f0f267365dafe04577d1bed4f3080e62f1c061642e',
  });

  console.info('SDK created');
}
main().catch(console.error);







const connectMetamask = async () => {
  console.log('Start metamask ')
  const accounts = await ethereum.request({ method: 'eth_request' });
  const account = accounts[0];
  console.log('account ', account)
  setAccount(account)
}


 function fetchData() {
  return <div>
   
    <button type="button" onClick={connectMetamask}>
    connect 
    </button>
  </div>
  }
}