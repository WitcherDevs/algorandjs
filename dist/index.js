"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const functions_1 = require("./utils/functions");
class Client {
    nodeNetwork;
    indexerNetwork;
    constructor(options) {
        this.nodeNetwork = options.nodeNetwork == "mainnet" ? "node.algoexplorerapi.io" : "node.testnet.algoexplorerapi.io";
        this.indexerNetwork = options.indexerNetwork == "mainnet" ? "algoindexer.algoexplorerapi.io" : "algoindexer.testnet.algoexplorerapi.io";
    }
    async getAddressInfo(address) {
        return await (0, functions_1.getAddressInfo)(this.nodeNetwork, address);
    }
    async getAssetBalances(assetid) {
        return await (0, functions_1.getAssetBalances)(this.indexerNetwork, assetid);
    }
    async getAddressBalances(address, assetid) {
        return await (0, functions_1.getAddressBalances)(this.indexerNetwork, address, assetid);
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map