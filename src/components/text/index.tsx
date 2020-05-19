import React from "react";
import {
  Animated,
  TextProps,
  TextStyle,
} from "react-native";
import {Colors} from "../../theme/colors";
import {TextAnimatedStyles} from "../../helpers/animated-types";
import {HelperStyles} from "../../helpers/styles";

interface Props extends TextProps {
  isLoading?: boolean;
}

interface State {
  animation: Animated.Value;
}

export class CustomText extends React.Component<Props, State> {
  state: State = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    if (!this.props.isLoading) {
      this.state.animation.setValue(1);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.isLoading && !this.props.isLoading) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }

  render() {
    const {getPropertyOfStyle} = HelperStyles;
    const {style} = this.props;
    const background = getPropertyOfStyle<string>(style, "backgroundColor", Colors.backgroundColor);
    const color = getPropertyOfStyle<string>(style, "color", Colors.black);

    const styleAnimation: TextAnimatedStyles = {
      opacity: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.5, 1],
      }),
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [Colors.skeletonColorText, background],
        extrapolate: "clamp",
      }),
      color: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [Colors.skeletonColorText, background, color],
      }),
    };

    const props = {
      numberOfLines: this.props.numberOfLines,
      style: [style, styleAnimation],
    };

    return <Animated.Text {...props}>{this.props.children}</Animated.Text>;
  }
}
