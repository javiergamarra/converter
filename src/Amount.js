import React, {useContext, useState} from 'react';
import ThemeContext from "./ThemeContext";
import useFocusOnMount from "./useFocusOnMount";

export default (props) => {

    const context = useContext(ThemeContext);
    const [negative, setNegative] = useState(false);

    const changeValue = event => {
        const value = event.currentTarget.value;
        setNegative(value < 0);
        props.onChange(value)
    };

    const {value} = props;

    const inputFocus = useFocusOnMount();

    return (
        <div style={{backgroundColor: context.theme === 'light' ? 'white' : 'gray'}}>
            <label>
                {props.name}
                <input type="number" onChange={changeValue} value={value}
                       ref={props.focusOnMount ? inputFocus : null}
                       disabled={props.disabled}
                       style={{border: negative ? '1px solid red' : ''}}/>
            </label>
        </div>
    );
}