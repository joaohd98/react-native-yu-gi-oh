import React from "react";
import {Animated, Dimensions} from "react-native";
import {DetailsCardImageStyles} from "./styles";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";

interface Props {
  animationScroll: Animated.Value;
  image?: string;
}

interface State {
  cardHeight: number;
}

export class DetailsCardImage extends React.Component<Props> {
  state: State = {
    cardHeight: Dimensions.get("window").height * (80 / 100),
  };

  render() {
    const {ImageCard} = DetailsCardImageStyles;
    const {image, animationScroll} = this.props;
    const {cardHeight} = this.state;

    const stylesAnimation: ViewAnimatedStyles = {
      opacity: animationScroll.interpolate({
        inputRange: [100, cardHeight],
        outputRange: [1, 0.5],
        extrapolate: "clamp",
      }),
    };

    return (
      <ImageCard
        style={stylesAnimation}
        cardHeight={cardHeight}
        source={{uri: image}}
        resizeMode={"stretch"}
      />
    );
  }
}
