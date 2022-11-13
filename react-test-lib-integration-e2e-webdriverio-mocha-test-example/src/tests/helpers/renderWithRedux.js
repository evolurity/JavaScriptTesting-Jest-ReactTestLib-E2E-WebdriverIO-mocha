import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {render} from "@testing-library/react";

export const renderWithRedux = (component, initialState) =>
    render(
        <Provider
            store={createReduxStore(initialState)}>{component}
        </Provider>
    );