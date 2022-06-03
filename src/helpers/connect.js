
import { Sdk, MetaMaskWalletProvider } from 'etherspot';


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



export async function fetchData() {
    return new Promise((resolve, reject) => {
      try {
        const data = { user: "samar" };
        resolve(data);
      } catch (error) {
        reject("error");
      }
    });
  }