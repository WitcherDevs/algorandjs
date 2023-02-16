import type { AddressInfo } from '../../types/AddressInfo';
import type { AssetBalances } from '../../types/Balances';
import type { AddressBalance } from '../../types/Balances';
export declare function getAddressInfo(baseurl: string, address: string): Promise<AddressInfo>;
export declare function getAssetBalances(baseurl: string, assetid: number): Promise<AssetBalances>;
export declare function getAddressBalances(baseurl: string, address: string, assetid: number): Promise<AddressBalance>;
//# sourceMappingURL=index.d.ts.map