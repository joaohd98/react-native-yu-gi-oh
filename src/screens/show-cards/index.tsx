import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";
import {ShowCardsList} from "./components/list-cards";
import {StatesReducers} from "../../redux/reducers";
import {ShowCardsScreenProps, ShowCardsScreenPropsActions} from "./model/props";
import {ShowCardsScreenAction} from "./redux/action";
import {Dispatch} from "redux";

export class ShowCards extends React.Component<ShowCardsScreenProps> {
  componentDidMount() {
    this.props.getAllCard();
  }

  render() {
    return (
      <View>
        <ShowCardsInputSearch />
        <ShowCardsList />
      </View>
    );
  }
}

const mapStateToProps = (state: StatesReducers): ShowCardsScreenProps => ({
  ...state.ShowCardScreen,
});

const mapDispatchToProps = (dispatch: Dispatch): ShowCardsScreenPropsActions => ({
  getAllCard: () => dispatch(ShowCardsScreenAction.getAllCard()),
});

export const ShowCardsScreen = connect(mapStateToProps, mapDispatchToProps)(ShowCards);
