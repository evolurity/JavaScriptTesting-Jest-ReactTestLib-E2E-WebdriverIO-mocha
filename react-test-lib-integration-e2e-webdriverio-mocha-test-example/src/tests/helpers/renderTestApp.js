import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../routes/AppRouter";
import {createReduxStore} from "../../store/store";

export const renderTestApp = (component, options) => {
    return render(
        <Provider store={createReduxStore(options?.initialState)}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter>
                    {component}
                </AppRouter>
            </MemoryRouter>
        </Provider>
    )
}