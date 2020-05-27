import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {RoutesName} from "../routes/routes-name";

type Types = "ShowCardsScreen" | "DetailsCardScreen";

export interface PropsGlobal<RouteName extends Types> {
  navigation?: StackNavigationProp<RoutesName, RouteName>;
  route?: RouteProp<RoutesName, RouteName>;
}
