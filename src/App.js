import React, {useState} from 'react';
import './App.css';
import Amount from "./Amount";
import ThemeContext from "./ThemeContext";

function App() {

    const [value, setValue] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(Math.random() * 10000);
    const [theme, setTheme] = useState('light');
    let timeout;

    const _onChange = value => {
        clearTimeout(timeout);

        setValue(value);

        timeout = setTimeout(() => setExchangeRate(0), 5000);
    };

    return (
        <ThemeContext.Provider value={{theme}}>

            <select onChange={event => setTheme(event.target.value)} value={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>

            <Amount name="Euros" value={value} onChange={_onChange}/>
            <Amount name="BTC" value={value * exchangeRate} disabled onChange={value => setValue(value)}/>
        </ThemeContext.Provider>
    );
}

export default App;
