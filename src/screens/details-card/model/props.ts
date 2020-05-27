import {PropsGlobal} from "../../../helpers/props-global";
import {AllCardsResponse} from "../../../services/get-all-cards/response";

export interface DetailsCardScreenPropsActions {}

type Type = DetailsCardScreenPropsActions & PropsGlobal<"DetailsCardScreen">;

export interface DetailsCardScreenProps extends Type {
  cards?: AllCardsResponse[];
}
