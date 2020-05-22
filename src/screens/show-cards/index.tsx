import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";
import {ShowCardsList} from "./components/list-cards";
import {StatesReducers} from "../../redux/reducers";
import {
  ShowCardsScreenProps,
  ShowCardsScreenPropsActions,
  ShowCardsScreenState,
} from "./model/props";
import {bindActionCreators, Dispatch} from "redux";
import {ShowCardScreenInitial} from "./redux/reducer";
import {Container} from "../../components/container";

export class ShowCards extends React.Component<ShowCardsScreenProps, ShowCardsScreenState> {
  state = {
    screenHeight: 0,
  };

  componentDidMount() {
    this.props.getAllCard();
  }

  render() {
    const {status, cards, limit} = this.props;
    const {screenHeight} = this.state;

    return (
      <Container onLayout={event => this.setState({screenHeight: event.nativeEvent.layout.height})}>
        <ShowCardsInputSearch />
        <ShowCardsList status={status} cards={cards.slice(0, limit)} screenHeight={screenHeight} />
      </Container>
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
