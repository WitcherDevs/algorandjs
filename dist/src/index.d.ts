import type { ClientOptions } from './types/Options';
export declare class Client {
    nodeNetwork: string;
    indexerNetwork: string;
    constructor(options: ClientOptions);
    getAddressInfo(address: string): Promise<import("./types/AddressInfo").AddressInfo>;
    getAssetBalances(assetid: number): Promise<import("./types/Balances").AssetBalances>;
    getAddressBalances(address: string, assetid: number): Promise<import("./types/Balances").AddressBalance>;
}
//# sourceMappingURL=index.d.ts.map