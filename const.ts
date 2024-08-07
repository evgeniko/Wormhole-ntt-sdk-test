import { Chain } from "@wormhole-foundation/sdk-base";
import { Ntt } from "@wormhole-foundation/sdk-definitions-ntt";
import { NttRoute } from "@wormhole-foundation/sdk-route-ntt";
export type NttContracts = {
  [key in Chain]?: Ntt.Contracts;
};


export const TEST_NTT_SPL22_TOKENS: NttContracts = {
  Solana: {
    token: "3ghtYBVKSACZ87sLufSVT19B5J66dcC6uxb9WUmAYPbH",
  // TODO: manager & transceiver the same for Solana, but different for BaseSepolia?
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

// Reformat NTT contracts to fit TokenConfig for Route
function reformat(contracts: NttContracts) {
  return Object.entries(TEST_NTT_SPL22_TOKENS).map(([chain, contracts]) => {
    const { token, manager, transceiver: xcvrs } = contracts!;
    const transceiver = Object.entries(xcvrs).map(([k, v]) => {
      return { type: k as NttRoute.TransceiverType, address: v };
    });
    return { chain: chain as Chain, token, manager, transceiver };
  });
}

export const NttTokens = {
  Test: reformat(TEST_NTT_SPL22_TOKENS),
};