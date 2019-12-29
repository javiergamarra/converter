import {useEffect, useMemo, useState} from "react";

export default function useCachedState(key) {

    const initialValue = useMemo(() => {
        return localStorage.getItem(key);
    }, [key]);

    const [state, setState] = useState(initialValue);

    useEffect(() => {
        setState(initialValue);
    }, [initialValue]);

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState];
}