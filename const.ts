import { Chain } from "@wormhole-foundation/sdk-base";
import { Ntt } from "@wormhole-foundation/sdk-definitions-ntt";
import { NttRoute } from "@wormhole-foundation/sdk-route-ntt";
export type NttContracts = {
  [key in Chain]?: Ntt.Contracts;
};

export const TEST_NTT_SPL22_TOKENS: NttContracts = {
  Solana: {
    token: "GCzVVsjMjkg8EpoidnFW9bqegwhbp1GWGpzuSfhH6fyB",
    manager: "NTttPKktsauausafEimYigoDKfb193P94L3Vyff6LvV",
    transceiver: {
      wormhole: "NTttPKktsauausafEimYigoDKfb193P94L3Vyff6LvV",
    },
  },
  Sepolia: {
    token: "0xF7cbc69c6259Cf06582EEDF9477D58a15Dc5332e",
    manager: "0xeBdEFbC8111439449293A98f552a4BE57e2D5FAD",
    transceiver: { wormhole: "0xf5D15B2F36A34918bD18C9D1382B98B9C22a7d3e" },
    // quoter: "Nqd6XqA8LbsCuG8MLWWuP865NV6jR1MbXeKxD4HLKDJ",
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