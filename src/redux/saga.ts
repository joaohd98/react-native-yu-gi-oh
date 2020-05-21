import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import {ShowCardsScreenSaga} from "../screens/show-cards/redux/saga";

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([...ShowCardsScreenSaga]);
};
