import {AllCardsResponse} from "../../../services/get-all-cards/response";
import {ServiceStatus} from "../../../services/model";

export interface ShowCardsScreenPropsActions {
  getAllCard: () => void;
}

export interface ShowCardsScreenProps extends ShowCardsScreenPropsActions {
  cards: AllCardsResponse[];
  status: ServiceStatus;
  limit: number;
  offset: number;
}
