export type GetListItemsResult<T> = Promise<T>;

export type GetListItemsParams = {
    name?: string;
    page?: string;
    params?: string;
};

export type GetItemsListFn<TParams, TResult> = (params: TParams) => Promise<TResult>;