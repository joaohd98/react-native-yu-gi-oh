import {call, put, takeEvery} from "redux-saga/effects";
import {Services} from "../../../services/services";
import {ShowCardsScreenAction} from "./action";
import {ShowCardsScreenActionConst} from "./action-type";

// eslint-disable-next-line no-unused-vars,func-style
function* getAllCards() {
  const result = yield call(() => Services.getAllCard());

  yield put(ShowCardsScreenAction.receiveAllCard(result));
}

export const ShowCardsScreenSaga = [
  takeEvery(ShowCardsScreenActionConst.fetchGetAllCards, getAllCards),
];
