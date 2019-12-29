import {useLayoutEffect, useRef} from "react";

export default function useFocusOnMount() {

    const inputFocus = useRef();

    useLayoutEffect(() => {
        if (inputFocus.current) {
            inputFocus.current.focus();
        }
    }, []);

    return inputFocus;
}