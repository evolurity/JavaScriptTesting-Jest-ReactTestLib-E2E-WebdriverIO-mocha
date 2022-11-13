import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter TEST', () => {
    test('Test counter', async () => {
        const {getByTestId} = renderTestApp(<Counter/>, {initialState: {counter: {value: 10}}, route: '/'});

        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('11');
    })
})