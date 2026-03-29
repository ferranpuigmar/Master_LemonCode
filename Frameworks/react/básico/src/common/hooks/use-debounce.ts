import React, { useEffect } from "react";

export const useDebounce = () => {
    const timerRef = React.useRef<ReturnType<typeof setTimeout>>(null);

    const debounce = React.useCallback(
        <TArgs extends unknown[]>(callBack: (...args: TArgs) => void, delay: number) => {
        return (...args: TArgs) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                callBack(...args);
            }, delay);
        };
    }, []);

    useEffect(() => {   
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    }, [])


    return {
        debounce
    }
}