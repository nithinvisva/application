export interface ProductList {
    productName: string;
    productId: string;
    userId: string;
    productDesc: string;
    _id: string;
}
export interface AddProductList {
    productName: string;
    productId: string;
    userId: string;
    productDesc: string;
    _id?: string;
}

export interface AddUpdate {
    productData: AddProductList;
    from: string;
}