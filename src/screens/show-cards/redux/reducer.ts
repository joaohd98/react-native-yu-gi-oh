import {ShowCardsScreenProps} from "../model/props";
import {ServiceStatus} from "../../../services/model";
import {Reducer} from "redux";
import {ShowCardsScreenActionConst, ShowCardsScreenActionType} from "./action-type";
import {ShowCardsScreenAction} from "./action";
import {REHYDRATE} from "redux-persist/es/constants";
import {AllCardsResponse} from "../../../services/get-all-cards/response";

export const ShowCardScreenInitial: ShowCardsScreenProps = {
  searchText: "",
  cards: [],
  status: ServiceStatus.loading,
  limit: 10,
  offset: 10,
  getAllCard: () => ShowCardsScreenAction.getAllCard(),
  addLimitCard: (limit, offset) => ShowCardsScreenAction.addLimitCard(limit, offset),
  filterCards: searchText => ShowCardsScreenAction.filterCards(searchText),
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

    case ShowCardsScreenActionConst.addLimitCards: {
      return {
        ...state,
        limit: action.limit + action.offset,
      };
    }

    case ShowCardsScreenActionConst.filterCards: {
      return {
        ...state,
        searchText: action.searchText,
        limit: state.offset,
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
