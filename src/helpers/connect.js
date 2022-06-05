import { ethers } from "ethers";

export var provider;
export var signer;

export const connectMetamask = async (
  accountChangedCallback,
  networkChangedCallback
) => {
  if (typeof window !== "undefined") {
    if (typeof window.ethereum === "undefined") {
      console.log("MetaMask NOT installed!");
      return { address: "no metamask", network: "no network" };
    } else {
      window.ethereum.on("accountsChanged", accountChangedCallback);
      window.ethereum.on("chainChanged", networkChangedCallback);
      provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      // Prompt user for account connections
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      const address = await signer.getAddress();
      const { chainId } = await provider.getNetwork();
      const chain = "0x" + chainId.toString(16);
      return { address: address, network: chain };
    }
  }
};


