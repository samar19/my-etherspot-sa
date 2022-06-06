import { Sdk, Env, MetaMaskWalletProvider } from "etherspot";


// connect to metamask and get address
// change default environment
Env.defaultName = "testnet";

export async function startSdk() {
  if (!MetaMaskWalletProvider.detect()) {
    console.log("MetaMask not detected");
    return;
  }

  const walletProvider = await MetaMaskWalletProvider.connect();
  const sdk = new Sdk(walletProvider);
  return sdk;
}

 

