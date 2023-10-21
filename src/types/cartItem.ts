export type CartItem = {
    id: number;
    sku?: string;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
    currency: string;
    currency_symbol: string;
}