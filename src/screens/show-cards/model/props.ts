import {AllCardsResponse} from "../../../services/get-all-cards/response";
import {ServiceStatus} from "../../../services/model";

export interface ShowCardsScreenPropsActions {
  getAllCard: () => void;
  addLimitCard: (limit: number, offset: number) => void;
  filterCards: (searchText: string) => void;
}

export interface ShowCardsScreenProps extends ShowCardsScreenPropsActions {
  searchText: string;
  cards: AllCardsResponse[];
  status: ServiceStatus;
  limit: number;
  offset: number;
}

export interface ShowCardsScreenState {
  screenHeight: number;
}
