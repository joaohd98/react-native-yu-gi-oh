import React from "react";
import {Animated, ImageProps} from "react-native";
import {HelperStyles} from "../../helpers/styles";
import {Colors} from "../../theme/colors";
import {TextAnimatedStyles, ViewAnimatedStyles} from "../../helpers/animated-types";
import {CustomImageStyle} from "./styles";

interface Props extends ImageProps {
  onPress?: () => void;
  activeOpacity?: number;
  isLoading?: boolean;
}

interface State {
  animation: Animated.Value;
  hasLoad: boolean;
}

export class CustomImage extends React.Component<Props, State> {
  state: State = {
    animation: new Animated.Value(0),
    hasLoad: false,
  };

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    const hasLoaded = !prevState.hasLoad && this.state.hasLoad;

    if (!this.props.isLoading && hasLoaded) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }

  render() {
    const {TouchableOpacity, Image} = CustomImageStyle;
    const {style} = this.props;
    const background = HelperStyles.getPropertyOfStyle<string>(
      style,
      "backgroundColor",
      Colors.backgroundColor
    );

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

    const touchableOpacityProps = {
      onPress: this.props.onPress,
      activeOpacity: this.props.isLoading ? 1 : this.props.activeOpacity,
      disabled: this.props.isLoading,
      style: touchableAnimation,
    };

    const imageProps = {
      source: this.props.source,
      style: [style, styleAnimation],
      resizeMode: this.props.resizeMode,
      onLoadEnd: () => this.setState({hasLoad: true}),
    };

    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <Image {...imageProps} />
      </TouchableOpacity>
    );
  }
}
