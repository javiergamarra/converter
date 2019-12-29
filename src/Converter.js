import React, {useContext, useRef, useState} from "react";
import Amount from "./Amount";
import ThemeContext from "./ThemeContext";

export default (props) => {

    const context = useContext(ThemeContext);
    const [value, setValue] = useState(0);

    const onChange = value => {
        setValue(value);
        props.onChange(true);
    };

    return (
        <>
            {props.header && (
                <h1>{props.header}</h1>
            )}
            <Amount name="Euros" value={value} onChange={onChange} focusOnMount={props.focusOnMount}/>
            <Amount name={props.cryptoName} value={value * props.exchangeRate} disabled/>

            {context.premium && ("💎 Premium conversion")}
        </>
    );

}