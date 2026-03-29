export type GetListItemsParams = {
    name?: string;
    page?: string;
    params?: string;
};

export type GetItemsListFn<TParams, TResult> = (params: TParams) => Promise<TResult>;

export interface GetListItemsResponse<Entity, PaginationInfo> {
    data: Entity[];
    paginationInfo: PaginationInfo;
}