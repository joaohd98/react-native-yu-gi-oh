import {Action} from "redux";
import {AllCardsResponse} from "../../../services/get-all-cards/response";
import {ServiceStatus} from "../../../services/model";

export enum ShowCardsScreenActionConst {
  fetchGetAllCards = "ShowCardsScreenActionConst@fetchGetAllCards",
  finishGetAllCards = "ShowCardsScreenActionConst@finishGetAllCards",
}

interface FetchGetAllCards extends Action<ShowCardsScreenActionConst.fetchGetAllCards> {
  status: ServiceStatus;
}

interface FinishGetAllCards extends Action<ShowCardsScreenActionConst.finishGetAllCards> {
  cards: AllCardsResponse[];
  status: ServiceStatus;
}

export type ShowCardsScreenActionType = FetchGetAllCards | FinishGetAllCards;
