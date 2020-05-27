import {Animated} from "react-native";
import {AllCardsResponse} from "../../../services/get-all-cards/response";

export interface DetailsCardScreenState {
  animationScroll: Animated.Value;
  selectedCard: AllCardsResponse;
}
