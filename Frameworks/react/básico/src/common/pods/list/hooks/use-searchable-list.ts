import React from "react";
import { GetTotalPagesCB, useGetTotalPages } from "./use-pagination/use-pagination";
import { useDebounce } from "@src/common/hooks/use-debounce";

export type FetchResult<Item, Links> = {
    data: Item[];
    links: Links;
}

export type ListStrategy<Item, FSearch, Links, PerPage = number> = {
    fetchCB: (search: FSearch) => Promise<FetchResult<Item, Links>>;
    getTotalPagesCB: GetTotalPagesCB<Links>;
    perPage?: PerPage;
};

export const useSearchableList = <TItem, FSearch, Links>(strategy: ListStrategy<TItem, FSearch, Links>
) => {
    const [items, setItems] = React.useState<TItem[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { debounce } = useDebounce();

    const { totalPages, setLinks } = useGetTotalPages({ pageGeneratorCallBack: strategy.getTotalPagesCB });

    const search = React.useCallback(async (searchParams: FSearch = {} as FSearch) => {
        setIsLoading(true);

        const result = await strategy.fetchCB(searchParams);
        setLinks(result.links);
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