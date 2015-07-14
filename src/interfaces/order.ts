export interface IOrder {
    id?: number;
    creationTime?: any;
    side: string;
    symbol: string;
    quantity: number;
    placed?: number;
    executed?: number;
    limitPrice: number;
    priority?: number;
    status?: string;
    traderId: string;
}
