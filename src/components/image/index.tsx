import React from "react";
import {Animated, Image, ImageProps} from "react-native";
import {HelperStyles} from "../../helpers/styles";
import {Colors} from "../../theme/colors";
import {TextAnimatedStyles, ViewAnimatedStyles} from "../../helpers/animated-types";
import {CustomImageStyle} from "./styles";

interface Props extends ImageProps {
  onPress?: () => void;
  activeOpacity?: number;
  isLoading?: boolean;
  setRef?: (ref: Image) => void;
  hasNoImage?: boolean;
  styleView?: ViewAnimatedStyles;
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
    const hasImage = JSON.stringify(this.props.source).indexOf("undefined") > -1;

    if (!this.props.isLoading && (hasLoaded || !hasImage)) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }

  render() {
    const {TouchableOpacity, Image} = CustomImageStyle;
    const {style, styleView, setRef, isLoading, onPress} = this.props;
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
      activeOpacity: isLoading || onPress === undefined ? 1 : this.props.activeOpacity,
      disabled: isLoading,
      style: [touchableAnimation, styleView],
    };

    const imageProps = {
      source: this.props.source,
      style: [style, styleAnimation],
      resizeMode: this.props.resizeMode,
      ref: ref => (setRef ? setRef(ref) : {}),
      onLoadEnd: () => this.setState({hasLoad: true}),
    };

    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <Image {...imageProps} />
      </TouchableOpacity>
    );
  }
}
