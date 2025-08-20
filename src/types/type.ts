export interface PopularProducts {
    id: number,
    content: string,
}

export interface CategoryItemType {
    id: number,
    content: string,
}

export interface User {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
}

export type UserStore = User | null

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
    viewmode: boolean
}
