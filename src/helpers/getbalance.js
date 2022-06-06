import { Sdk, Env, MetaMaskWalletProvider } from "etherspot";

Env.defaultName = "testnet";

// get balance

export async function getAccountBalances() {
    const walletProvider = await MetaMaskWalletProvider.connect();
    const sdk = new Sdk(walletProvider);
    const output = await sdk.getAccountBalances({
      account: '0x34E8E400BE58476977EB37c18d3C005878AB6d0C',
    });

    console.log('account balances', output);
  }
  getAccountBalances().catch(console.error);