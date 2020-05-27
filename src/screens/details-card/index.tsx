import React from "react";
import {connect} from "react-redux";
import {DetailsCardScreenProps} from "./model/props";
import {Animated, ScrollView, View} from "react-native";
import {DetailsCardScreenState} from "./model/state";
import {StatesReducers} from "../../redux/reducers";
import {DetailsCardImage} from "./components/image";
import {DetailsCardName} from "./components/name";
import {DetailsCardType} from "./components/type";

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
        <DetailsCardName image={selectedCard.getImage("big")} animationScroll={animationScroll} />
        <ScrollView scrollEventThrottle={25} onScroll={animatedEvent}>
          <DetailsCardImage
            image={selectedCard.getImage("big")}
            animationScroll={animationScroll}
          />
          <View style={{margin: 10}}>
            <DetailsCardType
              race={selectedCard.race}
              raceImage={selectedCard.getRaceImage()}
              attribute={selectedCard.attribute}
              attributeImage={selectedCard.getAttributeImage()}
              type={selectedCard.type}
              typeImage={selectedCard.getTypeImage()}
            />
          </View>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(index => (
            <Animated.View
              key={index.toString()}
              style={[
                {
                  backgroundColor: "red",
                  borderColor: "green",
                  borderWidth: 1,
                  height: 300,
                  width: "100%",
                },
              ]}
            />
          ))}
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
