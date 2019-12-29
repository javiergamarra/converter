import React from "react";
import Amount from "./Amount";
import ThemeContext from "./ThemeContext";

export default class Converter extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    _onChange = value => {
        this.setState({value});

        this.props.onChange(true);
    };

    render() {
        return (
            <>
                {this.props.header && (
                    <h1>{this.props.header}</h1>
                )}
                <Amount name="Euros" value={this.state.value} onChange={this._onChange}/>
                <Amount name={this.props.cryptoName} value={this.state.value * this.props.exchangeRate} disabled
                        onChange={value => this.setState({value})}/>

                {this.context.premium && ("💎 Premium conversion")}
            </>
        );
    }

}