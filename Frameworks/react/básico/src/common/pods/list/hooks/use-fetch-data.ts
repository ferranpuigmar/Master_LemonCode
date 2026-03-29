import React from "react";

export type FetchResult<Item, PaginationInfo> = {
    data: Item[];
    paginationInfo: PaginationInfo;
}

type UseFetchDataOptions<Item, SearchParams, PaginationInfo> = {
    fetchCB: (search: SearchParams) => Promise<FetchResult<Item, PaginationInfo>>;
    onPaginationChange: (paginationInfo: PaginationInfo) => void;
}

export const useFetchData = <Item, SearchParams, PaginationInfo>(
    options: UseFetchDataOptions<Item, SearchParams, PaginationInfo>
) => {
    const [items, setItems] = React.useState<Item[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetch = React.useCallback(async (searchParams: SearchParams = {} as SearchParams) => {
        setIsLoading(true);
        const result = await options.fetchCB(searchParams);
        options.onPaginationChange(result.paginationInfo);
        setItems(result.data);
        setIsLoading(false);
    }, [options]);

    return {
        items,
        isLoading,
        fetch
    };
};
