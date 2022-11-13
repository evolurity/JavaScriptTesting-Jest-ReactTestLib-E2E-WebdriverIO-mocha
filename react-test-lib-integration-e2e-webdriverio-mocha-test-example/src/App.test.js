import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


describe('TEST APP', () => {

    test('example 1', () => {
        render(<App/>);
        const titleElement = screen.getByText(/simple app for testing/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/test text/i);
        expect(titleElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });


    test('example 2', async () => {
        render(<App/>);
        const titleElement = screen.queryByText(/not found element/i);
        expect(titleElement).toBeNull();
        const data = await screen.findByText(/data/i);
        expect(data).toBeInTheDocument();
        expect(data).toHaveStyle({color: 'red'});
        expect(data).toMatchSnapshot();
    });

    test('example 3: CLICK EVENT', () => {
        render(<App/>);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    })

    test('example 4: INPUT EVENT', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText(/test text/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');
        // Искусственное событие
        // fireEvent.input(input, {
        //   target: { value: '123test'}
        // })
        // Полноценная эмуляция действия пользователя
        userEvent.type(input, '123test')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123test');
    })
})
