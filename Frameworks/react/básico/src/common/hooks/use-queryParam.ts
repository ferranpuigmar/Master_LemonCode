import React from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryParam = (queryKey: string) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [queryParam, setQueryParam] = React.useState<string | null>(() => searchParams.get(queryKey));

    React.useEffect(() => {
        const queryParamFromQuery = searchParams.get(queryKey);
        setQueryParam(queryParamFromQuery);
    }, [searchParams, queryKey]);

    const setQueryParamInUrl = (term: string) => {
        if(term) {
            setSearchParams({ [queryKey]: term });
        } else {
            setSearchParams(params => {
                params.delete(queryKey);
                return params;
            });
        }
    }

    return {
        queryParam,
        setQueryParamInUrl
    };
}