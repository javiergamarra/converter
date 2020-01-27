import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Converter from "../Converter";
import userEvent from "@testing-library/user-event";

test('renders Converter', () => {
    const {getByText} = render(<Converter cryptoName={"BTC"} header={"My BTC Converter"} exchangeRate={2}/>);
    expect(getByText('BTC')).toBeInTheDocument();
    expect(getByText('My BTC Converter')).toBeInTheDocument();
});

test('converts as expected', async () => {
    const { getByLabelText, debug } =
        render(<Converter cryptoName={"BTC"} header={"My BTC Converter"} exchangeRate={2}/>);

    await userEvent.type(getByLabelText("Euros"), "10");

    debug()
    expect(getByLabelText("BTC").value).toBe("20");
});

