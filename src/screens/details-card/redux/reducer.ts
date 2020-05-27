import {Reducer} from "redux";
import {DetailsCardScreenProps} from "../model/props";
import {DetailsCardScreenActionType} from "./action-type";

export const DetailsCardScreenInitial: DetailsCardScreenProps = {};

export const DetailsCardScreenReducer: Reducer<
  DetailsCardScreenProps,
  DetailsCardScreenActionType
> = (state = DetailsCardScreenInitial, action): DetailsCardScreenProps => {
  switch (action.type) {
    default:
      return state;
  }
};
