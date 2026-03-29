import React from "react";
import { GetTotalPagesCB, useGetTotalPages } from "./use-pagination";
import { useDebounce } from "@src/common/hooks/use-debounce";
import { FetchResult, useFetchData } from "./use-fetch-data";

export type UseSearchableListOptions<Item, SearchParams, PaginationInfo> = {
    fetchCB: (search: SearchParams) => Promise<FetchResult<Item, PaginationInfo>>;
    getTotalPagesCB: GetTotalPagesCB<PaginationInfo>;
};

export const useSearchableList = <Item, SearchParams, PaginationInfo>(options: UseSearchableListOptions<Item, SearchParams, PaginationInfo>
) => {
    const { debounce } = useDebounce();
    const { totalPages, setPaginationInfo } = useGetTotalPages({ pageGeneratorCallBack: options.getTotalPagesCB });

    const { items, isLoading, fetch } = useFetchData({
        fetchCB: options.fetchCB,
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