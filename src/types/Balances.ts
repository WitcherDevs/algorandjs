export interface AssetBalances {
    balances: {
        address: string;
        amount: number;
        "is-frozen": boolean;
        "deleted": boolean;
        "opted-in-at-round": number;
        "opted-out-at-round": number;
    }[];
    "current-round": number;
    "next-token": string;
};

export interface AddressBalance {
    address: string;
    amount: number;
    "is-frozen": boolean;
    "opted-in-at-round": number;
    "opted-out-at-round": number;
}