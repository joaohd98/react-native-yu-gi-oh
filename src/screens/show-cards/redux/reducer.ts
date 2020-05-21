import {ShowCardsScreenProps} from "../model/props";
import {ServiceStatus} from "../../../services/model";
import {Reducer} from "redux";
import {ShowCardsScreenActionConst, ShowCardsScreenActionType} from "./action-type";
import {ShowCardsScreenAction} from "./action";

export const ShowCardScreenInitial: ShowCardsScreenProps = {
  cards: [],
  status: ServiceStatus.loading,
  limit: 10,
  offset: 10,
  getAllCard: () => ShowCardsScreenAction.getAllCard(),
};

export const ShowCardScreenReducer: Reducer<ShowCardsScreenProps, ShowCardsScreenActionType> = (
  state = ShowCardScreenInitial,
  action
): ShowCardsScreenProps => {
  switch (action.type) {
    case ShowCardsScreenActionConst.fetchGetAllCards: {
      return {
        ...state,
        status: action.status,
      };
    }

    case ShowCardsScreenActionConst.finishGetAllCards: {
      return {
        ...state,
        status: action.status,
        cards: action.cards,
      };
    }

    default:
      return state;
  }
};
