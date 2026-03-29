import React, { useEffect } from "react";

export type GetTotalPagesCB<PaginationInfo> = (links: PaginationInfo) => number;

export const useGetTotalPages = <PaginationInfo>({ pageGeneratorCallBack }: { pageGeneratorCallBack: (links: PaginationInfo) => number }) => {
    const [paginationInfo, setPaginationInfo] = React.useState<PaginationInfo | undefined>(undefined);
    const [totalPages, setTotalPages] = React.useState<number>(1);

    useEffect(() => {
        const newTotalPages = paginationInfo ? pageGeneratorCallBack(paginationInfo) ?? 0 : 0;
        setTotalPages(newTotalPages);
    }, [paginationInfo]);

    return {
        setPaginationInfo,
        totalPages
    }
}