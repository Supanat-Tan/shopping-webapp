export interface PopularProducts {
    id: number,
    content: string,
}

export interface CategoryItemType {
    id: number,
    content: string,
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface PopularBoxProps {
    msg: string
}

export interface CategoryBoxProps {
    msg: string
}

export interface Product {
    _id: string,
    name: string,
    price: number,
    saleAmount: number
}

export type ProductListType = Product[];

export interface SearchItemPropType {
    item: Product
}
