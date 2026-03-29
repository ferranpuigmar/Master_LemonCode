import React from "react";
import { GetTotalPagesCB, useGetTotalPages } from "./use-pagination";
import { useDebounce } from "@src/common/hooks/use-debounce";
import { FetchResult, useFetchData } from "./use-fetch-data";

export type ListStrategy<Item, SearchParams, PaginationInfo> = {
    fetchCB: (search: SearchParams) => Promise<FetchResult<Item, PaginationInfo>>;
    getTotalPagesCB: GetTotalPagesCB<PaginationInfo>;
};

export const useSearchableList = <Item, SearchParams, PaginationInfo>(strategy: ListStrategy<Item, SearchParams, PaginationInfo>
) => {
    const { debounce } = useDebounce();
    const { totalPages, setPaginationInfo } = useGetTotalPages({ pageGeneratorCallBack: strategy.getTotalPagesCB });

    const { items, isLoading, fetch } = useFetchData({
        fetchCB: strategy.fetchCB,
        onPaginationChange: setPaginationInfo
    });

    const debouncedSearch = React.useMemo(
        () => debounce(fetch, 500),
        [fetch, debounce]
    );

    return {
        items,
        debouncedSearch,
        search: fetch,
        isLoading,
        totalPages
    }
}