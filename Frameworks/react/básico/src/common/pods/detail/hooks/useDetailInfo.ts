import React from "react";
import { GetDetailInterface } from "../detail.api";

export const useDetailInfo = <T>(
    id: string,
    api: GetDetailInterface<T>,
    defaultValue: T
) => {
    const [member, setMember] = React.useState<T>(defaultValue);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLoading(true);
        api.execute(id).then((data) => {
            setMember(data);
            setIsLoading(false);
        });
    }, [id]);

    return { member, isLoading };
}