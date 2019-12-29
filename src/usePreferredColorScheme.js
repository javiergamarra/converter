import {useEffect, useState} from "react";

export default function usePreferredColorScheme() {
    const [preferredColorScheme, setPreferredColorScheme] = useState('light');

    useEffect(() => {
        const mediaQueryList = window.matchMedia('(max-width: 600px)');
        setPreferredColorScheme(mediaQueryList.matches ? 'light' : 'dark');
    }, []);

    return preferredColorScheme;
}