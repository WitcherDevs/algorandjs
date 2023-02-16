declare enum sigType {
    "sig" = 0,
    "msig" = 1,
    "lsig" = 2
}
export interface AddressInfo {
    address: string;
    amount: number;
    "min-balance": number;
    "amount-without-pending-rewards": number;
    "apps-local-state": {
        id: number;
        "schema": {
            "num-uint": number;
            "num-byte-slice": number;
        };
        "key-value": {
            "key": string;
            "value": {
                type: 0;
                bytes: string;
                uint: number;
            };
        }[];
    }[];
    "total-apps-opted-in": number;
    "apps-total-schema": {
        "num-uint": number;
        "num-byte-slice": number;
    };
    "apps-total-extra-pages": number;
    assets: {
        amount: number;
        "asset-id": number;
        "is-frozen": boolean;
    }[];
    "created-apps": {
        id: number;
        params: {
            creator: string;
            "approval-program": string;
            "clear-state-program": string;
            "extra-program-pages": number;
            "local-state-schema": {
                "num-uint": number;
                "num-byte-slice": number;
            };
            "global-state-schema": {
                "num-uint": number;
                "num-byte-slice": number;
            };
            "global-state": {
                key: string;
                value: {
                    type: number;
                    bytes: string;
                    uint: number;
                };
            };
        };
    }[];
    "total-created-apps": number;
    "created-assets": {
        index: number;
        params: {
            clawback: string;
            creator: string;
            decimals: number;
            "default-frozen": boolean;
            freeze: string;
            manager: string;
            "metadata-hash": string;
            name: string;
            "name-b64": string;
            reserve: string;
            total: number;
            "unit-name": string;
            "unit-name-b64": string;
            url: string;
            "url-b64": string;
        };
    }[];
    "total-created-assets": number;
    "participation": {
        "selection-participation-key": string;
        "vote-first-valid": number;
        "vote-key-dilution": number;
        "vote-last-valid": number;
        "vote-participation-key": string;
        "state-proof-key": string;
    };
    "pending-rewards": number;
    "reward-base": number;
    "rewards": number;
    "round": number;
    "status": string;
    "sig-type": sigType;
}
export {};
//# sourceMappingURL=AddressInfo.d.ts.map