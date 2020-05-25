import {Action} from "redux";
import {AllCardsResponse} from "../../../services/get-all-cards/response";
import {ServiceStatus} from "../../../services/model";

export enum ShowCardsScreenActionConst {
  fetchGetAllCards = "ShowCardsScreenActionConst@fetchGetAllCards",
  finishGetAllCards = "ShowCardsScreenActionConst@finishGetAllCards",
  errorGetAllCards = "ShowCardsScreenActionConst@errorGetAllCards",
  addLimitCards = "ShowCardsScreenActionConst@addLimitCards",
  filterCards = "ShowCardsScreenActionConst@filterCards",
  rehydrate = "persist/REHYDRATE",
}

interface FetchGetAllCards extends Action<ShowCardsScreenActionConst.fetchGetAllCards> {
  status: ServiceStatus;
}

interface FinishGetAllCards extends Action<ShowCardsScreenActionConst.finishGetAllCards> {
  cards: AllCardsResponse[];
  status: ServiceStatus;
}

interface ErrorGetAllCards extends Action<ShowCardsScreenActionConst.errorGetAllCards> {
  status: ServiceStatus;
}

interface AddLimitCards extends Action<ShowCardsScreenActionConst.addLimitCards> {
  limit: number;
  offset: number;
}

interface FilterCards extends Action<ShowCardsScreenActionConst.filterCards> {
  searchText: string;
}

interface RehydrateData extends Action<ShowCardsScreenActionConst.rehydrate> {}

export type ShowCardsScreenActionType =
  | FetchGetAllCards
  | FinishGetAllCards
  | ErrorGetAllCards
  | RehydrateData
  | AddLimitCards
  | FilterCards;
