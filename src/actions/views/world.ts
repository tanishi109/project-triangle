import {createAction} from "redux-actions";

export const setScene = createAction<() => JSX.Element>(`VIEWS/SET_SCENE`);
