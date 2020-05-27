import {AllCardsResponse} from "../../../services/get-all-cards/response";
import {ServiceStatus} from "../../../services/model";
import {PropsGlobal} from "../../../helpers/props-global";

export interface ShowCardsScreenPropsActions {
  getAllCard: () => void;
  addLimitCard: (limit: number, offset: number) => void;
  filterCards: (searchText: string) => void;
}

type Type = ShowCardsScreenPropsActions & PropsGlobal<"ShowCardsScreen">;

export interface ShowCardsScreenProps extends Type {
  searchText: string;
  cards: AllCardsResponse[];
  status: ServiceStatus;
  limit: number;
  offset: number;
}
