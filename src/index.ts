import { getAddressInfo, getAssetBalances, getAddressBalances } from "./utils/functions";
import type { ClientOptions } from './types/Options';

export class Client {
    nodeNetwork: string;
    indexerNetwork: string;
    constructor(options: ClientOptions) {
        this.nodeNetwork = options.nodeNetwork == "mainnet" ? "node.algoexplorerapi.io" : "node.testnet.algoexplorerapi.io";
        this.indexerNetwork = options.indexerNetwork == "mainnet" ? "algoindexer.algoexplorerapi.io" : "algoindexer.testnet.algoexplorerapi.io";
    }

    async getAddressInfo(address: string) {
        return await getAddressInfo(this.nodeNetwork, address);
    }

    async getAssetBalances(assetid: number) {
        return await getAssetBalances(this.indexerNetwork, assetid);
    }

    async getAddressBalances(address: string, assetid: number) {
        return await getAddressBalances(this.indexerNetwork, address, assetid);
    }
}