import {ShowCardsScreenProps} from "../model/props";
import {ServiceStatus} from "../../../services/model";
import {Reducer} from "redux";
import {ShowCardsScreenActionConst, ShowCardsScreenActionType} from "./action-type";
import {ShowCardsScreenAction} from "./action";
import {REHYDRATE} from "redux-persist/es/constants";
import {AllCardsResponse} from "../../../services/get-all-cards/response";

export const ShowCardScreenInitial: ShowCardsScreenProps = {
  cards: [],
  status: ServiceStatus.success,
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

    case ShowCardsScreenActionConst.errorGetAllCards: {
      return {
        ...state,
        status: state.cards.length > 0 ? ServiceStatus.success : action.status,
      };
    }

    case REHYDRATE: {
      return {
        ...state,
        cards: state.cards ? state.cards.map(card => new AllCardsResponse(card)) : [],
      };
    }

    default:
      return state;
  }
};
