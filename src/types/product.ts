export type Product = {
    id: number;
    name: string;
    description: string;
    sku?: string;
    retail_price_eur: number;
    vendor_price_eur: number;
    media?: ProductMedia[]
}

export type ProductMedia = {
    name: string;
    url: string;
    mime: string;
    formats?: {
        thumbnail: {
            url: string
        }
    }
}