import React from "react";
import {CustomButtonStyle} from "./styles";
import {ViewAnimatedStyles} from "../../helpers/animated-types";
import {Animated, TouchableOpacityProps} from "react-native";
import {Colors} from "../../theme/colors";
import {HelperStyles} from "../../helpers/styles";

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

interface State {
  animation: Animated.Value;
}

export class CustomButton extends React.Component<Props> {
  state: State = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    if (!this.props.isLoading) {
      this.initAnimation();
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.initAnimation();
    }
  }

  initAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const {getPropertyOfStyle} = HelperStyles;
    const {Button} = CustomButtonStyle;
    const {onPress, children, style} = this.props;
    const background = getPropertyOfStyle<string>(style, "backgroundColor", Colors.backgroundColor);

    const touchableStyles: ViewAnimatedStyles = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.skeletonColorText, background],
        extrapolate: "clamp",
      }),
      opacity: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.5, 1],
      }),
    };

    const childrenStyle: ViewAnimatedStyles = {
      opacity: this.state.animation,
    };

    const buttonProps = {
      onPress,
      style: [style, touchableStyles],
    };

    const childrenProps = {
      style: childrenStyle,
    };

    return (
      <Button {...buttonProps}>
        <Animated.View {...childrenProps}>{children}</Animated.View>
      </Button>
    );
  }
}
