import AsyncStorage from "@react-native-community/async-storage";
import {combineReducers} from "redux";
import {ShowCardScreenReducer} from "../screens/show-cards/redux/reducer";
import {ShowCardsScreenProps} from "../screens/show-cards/model/props";
import {persistReducer} from "redux-persist";

export interface StatesReducers {
  ShowCardScreen: ShowCardsScreenProps;
}

const persistConfig = {
  key: "ShowCardScreen",
  storage: AsyncStorage,
  whitelist: ["cards"],
};

const ShowCardScreenReducerReducer = persistReducer(persistConfig, ShowCardScreenReducer);

export const Reducers = combineReducers({
  ShowCardScreen: ShowCardScreenReducerReducer,
});
