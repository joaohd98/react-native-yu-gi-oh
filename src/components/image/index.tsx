import React from "react";
import {Animated, ImageProps, TouchableOpacity} from "react-native";
import {HelperStyles} from "../../helpers/styles";
import {Colors} from "../../theme/colors";
import {TextAnimatedStyles, ViewAnimatedStyles} from "../../helpers/animated-types";

interface Props extends ImageProps {
  onPress?: () => void;
  activeOpacity?: number;
  isLoading?: boolean;
}

interface State {
  animation: Animated.Value;
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export class CustomImage extends React.Component<Props, State> {
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

    const styleAnimation: TextAnimatedStyles = {
      opacity: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
      }),
    };
    const touchableAnimation: ViewAnimatedStyles = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.skeletonColorImage, background],
        extrapolate: "clamp",
      }),
    };

    const imageProps = {
      source: this.props.source,
      style: [style, styleAnimation],
      resizeMode: this.props.resizeMode,
    };

    const touchableOpacityProps = {
      onPress: this.props.onPress,
      activeOpacity: this.props.isLoading ? 1 : this.props.activeOpacity,
      disabled: this.props.isLoading,
      style: touchableAnimation,
    };

    return (
      <AnimatedTouchableOpacity {...touchableOpacityProps}>
        <Animated.Image {...imageProps} />
      </AnimatedTouchableOpacity>
    );
  }
}
