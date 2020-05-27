import AsyncStorage from "@react-native-community/async-storage";
import {combineReducers} from "redux";
import {ShowCardScreenReducer} from "../screens/show-cards/redux/reducer";
import {ShowCardsScreenProps} from "../screens/show-cards/model/props";
import {persistReducer} from "redux-persist";
import {DetailsCardScreenProps} from "../screens/details-card/model/props";
import {DetailsCardScreenReducer} from "../screens/details-card/redux/reducer";

export interface StatesReducers {
  ShowCardScreen: ShowCardsScreenProps;
  DetailsCardScreen: DetailsCardScreenProps;
}

const persistConfig = {
  key: "ShowCardScreen",
  storage: AsyncStorage,
  whitelist: ["cards"],
};

const ShowCardScreenPersistReducer = persistReducer(persistConfig, ShowCardScreenReducer);

export const Reducers = combineReducers({
  ShowCardScreen: ShowCardScreenPersistReducer,
  DetailsCardScreen: DetailsCardScreenReducer,
});
