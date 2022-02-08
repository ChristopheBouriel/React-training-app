import { createStore } from "react-redux";
import rootReducer from '../reducers';
import initialData from "../initialData";

const data = {
    tasks: initialData
};

export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};