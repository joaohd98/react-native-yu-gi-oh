import React from "react";
import {
  Animated,
  TextProps,
  TextStyle,
} from "react-native";
import {Colors} from "../../theme/colors";
import {TextAnimatedStyles} from "../../helpers/animated-types";

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
    let backgroundColor = Colors.backgroundColor;
    let color = Colors.black;
    const styles = this.props.style;

    if (styles) {
      (styles as TextStyle[]).forEach(style => {
        if (style.backgroundColor) backgroundColor = style.backgroundColor;
        if (style.color) color = style.color;
      });
    }

    const styleAnimation: TextAnimatedStyles = {
      opacity: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.5, 1],
      }),
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [Colors.skeletonColorText, backgroundColor],
        extrapolate: "clamp",
      }),
      color: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [Colors.skeletonColorText, backgroundColor, color],
      }),
    };

    const props = {
      numberOfLines: this.props.numberOfLines,
      style: [this.props.style, styleAnimation],
    };

    return <Animated.Text {...props}>{this.props.children}</Animated.Text>;
  }
}
