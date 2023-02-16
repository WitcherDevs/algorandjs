import type { AddressInfo } from '../../types/AddressInfo';
import type { AssetBalances } from '../../types/Balances';
import type { AddressBalance } from '../../types/Balances';


export async function getAddressInfo(baseurl: string, address: string): Promise<AddressInfo> {
    const data = await fetch(`https://${baseurl}/v2/accounts/${address}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);
    
    return data as AddressInfo;
};

export async function getAssetBalances(baseurl: string, assetid: number): Promise<AssetBalances> {
    const data = await fetch(`https://${baseurl}/v2/assets/${assetid}/balances`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);

    return data as AssetBalances;
};

export async function getAddressBalances(baseurl: string, address: string, assetid: number): Promise<AddressBalance> {
    let data = await fetch(`https://${baseurl}/v2/assets/${assetid}/balances`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);

    data.balances.forEach((balance: AddressBalance) => {
        switch(balance.address) {
            case address: {
                data = balance;
                break;
            }
        }
    });

    return data as AddressBalance;
};