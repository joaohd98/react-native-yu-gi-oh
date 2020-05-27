import React from "react";
import {connect} from "react-redux";
import {DetailsCardScreenProps} from "./model/props";
import {Animated, ScrollView} from "react-native";
import {DetailsCardScreenState} from "./model/state";
import {StatesReducers} from "../../redux/reducers";

export class DetailsCard extends React.Component<DetailsCardScreenProps, DetailsCardScreenState> {
  state: DetailsCardScreenState = {
    animationScroll: new Animated.Value(0),
    selectedCard: this.props.cards?.find(({id}) => id === this.props.route?.params.cardId!)!,
  };

  render() {
    const {animationScroll} = this.state;

    const styleAnimation = {
      backgroundColor: animationScroll.interpolate({
        inputRange: [0, 299.99, 300, 599.99, 600, 899.99, 900],
        outputRange: ["pink", "pink", "red", "red", "gray", "gray", "orange"],
        extrapolate: "clamp",
      }),
    };

    return (
      <>
        <ScrollView
          scrollEventThrottle={25}
          onScroll={Animated.event(
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
          )}
        >
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
                styleAnimation,
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
