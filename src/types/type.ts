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
    amount: number
    productId: string
}

export interface CategoryBoxProps {
    msg: string
}

//Product List
export interface Product {
    _id: string,
    productName: string,
    price: number,
    soldAmount: number,
    averageRating: number
}

export type ProductListType = Product[];

export type ProductDetailType = Product | null

export interface SearchItemPropType {
    item: Product
    viewmode: boolean
}

//Cart
export interface CartItem {
    _id: string,
    productName: string,
    price: number
    quantity: number
}

export type Cart = CartItem[];

//Product Store
export type CurrentItemType = Product | null


//CheckOut
export interface CheckOutItemProps {
    _id: string,
    productName: string,
    price: number,
    quantity: number,
}