import {createAction} from "redux-actions";
import {getEntityActions} from "./_factory";

export const setToken = createAction("PLAYER/SET_TOKEN", (token: string) => ({token}));

export default getEntityActions("PLAYER");
