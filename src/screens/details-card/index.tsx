import React from "react";
import {connect} from "react-redux";
import {DetailsCardScreenProps} from "./model/props";
import {Animated, ScrollView} from "react-native";
import {DetailsCardScreenState} from "./model/state";
import {StatesReducers} from "../../redux/reducers";
import {DetailsCardNameImage} from "./components/name-image";

export class DetailsCard extends React.Component<DetailsCardScreenProps, DetailsCardScreenState> {
  state: DetailsCardScreenState = {
    animationScroll: new Animated.Value(0),
    selectedCard: this.props.cards?.find(({id}) => id === this.props.route?.params.cardId!)!,
  };

  render() {
    const {animationScroll, selectedCard} = this.state;
    const animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: animationScroll,
            },
          },
        },
      ],
      {useNativeDriver: false}
    );

    return (
      <>
        <ScrollView scrollEventThrottle={25} onScroll={animatedEvent}>
          <DetailsCardNameImage
            name={selectedCard.name}
            image={selectedCard.getImage("big")}
            animationScroll={animationScroll}
          />
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state: StatesReducers): DetailsCardScreenProps => ({
  cards: state.ShowCardScreen.cards,
});

const mapDispatchToProps = null;

export const DetailsCardScreen = connect(mapStateToProps, mapDispatchToProps)(DetailsCard);
