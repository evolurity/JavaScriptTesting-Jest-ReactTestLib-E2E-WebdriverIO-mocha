import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/selectors/getCounterValue";
import {decrement, increment} from "../../store/reducers/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>{value}</h1>
            <button onClick={onIncrement} data-testid={'increment-btn'}>Increment</button>
            <button onClick={onDecrement} data-testid={'decrement-btn'}>Decrement</button>

        </div>
    );
};

export default Counter;