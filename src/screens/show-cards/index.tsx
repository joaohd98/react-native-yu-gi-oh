import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";
import {ShowCardsList} from "./components/list-cards";
import {StatesReducers} from "../../redux/reducers";
import {ShowCardsScreenProps, ShowCardsScreenPropsActions} from "./model/props";
import {bindActionCreators, Dispatch} from "redux";
import {ShowCardScreenInitial} from "./redux/reducer";

export class ShowCards extends React.Component<ShowCardsScreenProps> {
  componentDidMount() {
    this.props.getAllCard();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const {status, cards, limit} = this.props;

    return (
      <View>
        <ShowCardsInputSearch />
        <ShowCardsList status={status} cards={cards.slice(0, limit)} />
      </View>
    );
  }
}

const mapStateToProps = (state: StatesReducers): ShowCardsScreenProps => ({
  ...state.ShowCardScreen,
});

const mapDispatchToProps = (dispatch: Dispatch): ShowCardsScreenPropsActions => ({
  getAllCard: bindActionCreators(ShowCardScreenInitial.getAllCard, dispatch),
});

export const ShowCardsScreen = connect(mapStateToProps, mapDispatchToProps)(ShowCards);
