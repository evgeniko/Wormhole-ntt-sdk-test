import { Ntt } from "@wormhole-foundation/sdk-definitions-ntt";
import { Chain, encoding } from "@wormhole-foundation/sdk";

export type NttContracts = {
  [key in Chain]?: Ntt.Contracts;
};

export const DEVNET_SOL_PRIVATE_KEY = encoding.b58.encode(
  new Uint8Array(
    [218,95 //.. rest of the key
    ])
);
export const DEVNET_ETH_PRIVATE_KEY =
  "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"; // Ganache default private key

export const TEST_NTT_SPL22_TOKENS: NttContracts = {
  Solana: {
    token: "3ghtYBVKSACZ87sLufSVT19B5J66dcC6uxb9WUmAYPbH",
    manager: "NTueGPu3ckEwiQXprSjAfHC7YybrJNAG39X2AKEG9So",
    transceiver: {
      wormhole: "NTueGPu3ckEwiQXprSjAfHC7YybrJNAG39X2AKEG9So",
    },
  },
  BaseSepolia: {
    token: "0xd67a9c292e0cc48fDb48D63F11dFdc364201C9DE",
    manager: "0x75e16657906a012EC8674fE29b36e60cDe21ec79",
    transceiver: { wormhole: "0xeBdEFbC8111439449293A98f552a4BE57e2D5FAD" },
  },
};