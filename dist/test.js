"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/index");
(async () => {
    let client = new index_1.Client({
        indexerNetwork: "mainnet",
        nodeNetwork: "mainnet"
    });
    client;
    let data = await algorand.getAddressBalances("P2GRE4MEPPG543754DJACP5W5NMJ232PXP66MNGF34AUULFKVGILJWQX24", 1018888562);
})();
//# sourceMappingURL=test.js.map