"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressBalances = exports.getAssetBalances = exports.getAddressInfo = void 0;
async function getAddressInfo(baseurl, address) {
    const data = await fetch(`https://${baseurl}/v2/accounts/${address}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);
    return data;
}
exports.getAddressInfo = getAddressInfo;
;
async function getAssetBalances(baseurl, assetid) {
    const data = await fetch(`https://${baseurl}/v2/assets/${assetid}/balances`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);
    return data;
}
exports.getAssetBalances = getAssetBalances;
;
async function getAddressBalances(baseurl, address, assetid) {
    let data = await fetch(`https://${baseurl}/v2/assets/${assetid}/balances`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);
    data.balances.forEach((balance) => {
        switch (balance.address) {
            case address: {
                data = balance;
                break;
            }
        }
    });
    return data;
}
exports.getAddressBalances = getAddressBalances;
;
//# sourceMappingURL=index.js.map