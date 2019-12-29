import React from 'react';
import ThemeContext from "./ThemeContext";

class Amount extends React.Component {
    static contextType = ThemeContext;

    changeValue = event => {
        const value = event.currentTarget.value;
        this.setState({isNegative: value < 0});
        this.props.onChange(value)
    };

    render() {
        const {value} = this.props;

        return (
            <div style={{backgroundColor: this.context.theme === 'light' ? 'white' : 'gray'}}>
                <label htmlFor="amount">{this.props.name}</label>
                <input id="amount" type="number" onChange={this.changeValue} value={value}
                       disabled={this.props.disabled}
                       style={{border: this.state && this.state.isNegative ? '1px solid red' : ''}}/>
            </div>
        );
    }
}

export default Amount;