import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../store/store";
import { showActions } from "./actions";

export type ThunkAction = (dispatch: ThunkDispatch<AppState, unknown, showActions>, getState: () => AppState, extraArgument: unknown) => void