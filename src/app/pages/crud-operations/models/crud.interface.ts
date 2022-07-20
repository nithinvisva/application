export interface dataList {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface addUpdate {
    listData: dataList;
    from: string;
}