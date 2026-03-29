import React, { useEffect } from "react";

export type GetTotalPagesCB<Links> = (links: Links) => number;

export const useGetTotalPages = <TLink>({ pageGeneratorCallBack }: { pageGeneratorCallBack: (links: TLink) => number }) => {
    const [links, setLinks] = React.useState<TLink | undefined>(undefined);
    const [totalPages, setTotalPages] = React.useState<number>(1);

    useEffect(() => {
        const newTotalPages = links ? pageGeneratorCallBack(links) ?? 0 : 0;
        setTotalPages(newTotalPages);
    }, [links]);

    return {
        setLinks,
        totalPages
    }
}