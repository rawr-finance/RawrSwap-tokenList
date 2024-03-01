import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [
            ChainId.BlastTest,
        ],
        contracts: {
            [ChainId.BlastTest]: {
                address: '0x2A2E08ea99E63482BDad8Bf69c7b69752F07736F',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ether',
        symbol: TokenSymbol.ETH,
        chains: [
            ChainId.BlastTest,
        ],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.BlastTest]: {
                address: '0x4200000000000000000000000000000000000023', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped Ether',
        symbol: TokenSymbol.WETH,
        chains: [
            ChainId.BlastTest,
        ],
        icon: baseURL + 'WETH.png',
        contracts: {
            [ChainId.BlastTest]: {
                address: '0x4200000000000000000000000000000000000023',
                decimal: 18,
            },
        },
    },
    {
        name: 'Rebasing USD',
        symbol: TokenSymbol.USDB,
        chains: [
            ChainId.BlastTest,
        ],
        icon: baseURL + 'usdb.png',
        contracts: {
            [ChainId.BlastTest]: {
                address: '0x4200000000000000000000000000000000000022',
                decimal: 18,
            },
        },
    },
]
