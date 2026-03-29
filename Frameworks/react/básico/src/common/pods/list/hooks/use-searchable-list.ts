import React from "react";
import { GetTotalPagesCB, useGetTotalPages } from "./use-pagination/use-pagination";
import { useDebounce } from "@src/common/hooks/use-debounce";

export type FetchResult<Item, PaginationInfo> = {
    data: Item[];
    paginationInfo: PaginationInfo;
}

export type ListStrategy<Item, FSearch, PaginationInfo> = {
    fetchCB: (search: FSearch) => Promise<FetchResult<Item, PaginationInfo>>;
    getTotalPagesCB: GetTotalPagesCB<PaginationInfo>;
};

export const useSearchableList = <Item, FSearch, PaginationInfo>(strategy: ListStrategy<Item, FSearch, PaginationInfo>
) => {
    const [items, setItems] = React.useState<Item[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { debounce } = useDebounce();

    const { totalPages, setPaginationInfo } = useGetTotalPages({ pageGeneratorCallBack: strategy.getTotalPagesCB });

    const search = React.useCallback(async (searchParams: FSearch = {} as FSearch) => {
        setIsLoading(true);

        const result = await strategy.fetchCB(searchParams);
        setPaginationInfo(result.paginationInfo);
        setItems(result.data);
        setIsLoading(false);
    }, [])

    const debouncedSearch = React.useMemo(
        () => debounce(search, 500),
        [search, debounce]
    );

    return {
        items,
        debouncedSearch,
        search,
        isLoading,
        totalPages
    }
}