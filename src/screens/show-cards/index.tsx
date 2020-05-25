import React from "react";
import {connect} from "react-redux";
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
    const {status, cards, limit, addLimitCard, filterCards, searchText, offset} = this.props;
    const {screenHeight} = this.state;
    const cardsFiltered =
      searchText === ""
        ? cards
        : cards.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()));

    return (
      <Container onLayout={event => this.setState({screenHeight: event.nativeEvent.layout.height})}>
        <ShowCardsInputSearch text={searchText} onChangeText={filterCards} />
        <ShowCardsList
          status={status}
          limitIndexAnimation={offset}
          cards={cardsFiltered.slice(0, limit)}
          hasMoreToLoad={limit + offset < cardsFiltered.length}
          screenHeight={screenHeight}
          searchText={searchText}
          addCardsLimit={() => addLimitCard(limit, offset)}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: StatesReducers): ShowCardsScreenProps => ({
  ...state.ShowCardScreen,
});

const mapDispatchToProps = (dispatch: Dispatch): ShowCardsScreenPropsActions => ({
  getAllCard: bindActionCreators(ShowCardScreenInitial.getAllCard, dispatch),
  addLimitCard: bindActionCreators(ShowCardScreenInitial.addLimitCard, dispatch),
  filterCards: bindActionCreators(ShowCardScreenInitial.filterCards, dispatch),
});

export const ShowCardsScreen = connect(mapStateToProps, mapDispatchToProps)(ShowCards);
