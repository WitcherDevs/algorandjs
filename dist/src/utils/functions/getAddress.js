"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddress = void 0;
async function getAddress(address) {
    const data = await fetch(`https://node.algoexplorerapi.io/v2/accounts/${address}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then((res) => res.json()).then((data) => data);
    return data;
}
exports.getAddress = getAddress;
//# sourceMappingURL=getAddress.js.map