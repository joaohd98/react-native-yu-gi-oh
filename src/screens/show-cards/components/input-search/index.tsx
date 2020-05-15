import React from "react";
import {ShowCardsInputSearchStyles} from "./styles";
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  InputAnimatedStyles,
  TextAnimatedStyles,
  ViewAnimatedStyles,
} from "../../../../helpers/animated-types";
import {Colors} from "../../../../theme/colors";
import {ShowCardsInputSearchConst} from "./const";

interface Props {
  test: undefined;
}

interface State {
  blurFocusAnimation: Animated.Value;
  inputText: string;
  hasInputFocus: boolean;
  inputLayout: LayoutRectangle | null;
  placeholderFalseLayout: LayoutRectangle | null;
}

export class ShowCardsInputSearch extends React.Component<Props, State> {
  state: State = {
    blurFocusAnimation: new Animated.Value(0),
    hasInputFocus: false,
    inputText: "asdasdasasdsadsadsadsa",
    inputLayout: null,
    placeholderFalseLayout: null,
  };

  inputRef: TextInput | null = null;

  handleInputFocus = (isFocused: boolean) => {
    const toValue = isFocused ? 0 : 1;

    Animated.timing(this.state.blurFocusAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      this.setState({hasInputFocus: !!toValue});
    });
  };

  handleCancelButton = () => {
    this.inputRef?.blur();
  };

  setSizeInput = (event: LayoutChangeEvent) => {
    this.setState({inputLayout: event.nativeEvent.layout});
  };

  setSizeText = (event: LayoutChangeEvent) => {
    this.setState({placeholderFalseLayout: event.nativeEvent.layout});
  };

  render() {
    const {
      View,
      Input,
      EraseButton,
      FalsePlaceholder,
      FalsePlaceholderText,
      CancelButton,
      CancelButtonText,
    } = ShowCardsInputSearchStyles;

    const {
      blurFocusAnimation,
      inputText,
      hasInputFocus,
      inputLayout,
      placeholderFalseLayout,
    } = this.state;

    const {placeholder, cancelText} = ShowCardsInputSearchConst;

    const eraseButtonStyle: TextAnimatedStyles = {
      opacity: blurFocusAnimation,
    };

    const inputStyle: InputAnimatedStyles = {
      color: blurFocusAnimation.interpolate({
        inputRange: [0, 0.99, 1],
        outputRange: ["transparent", "transparent", hasInputFocus ? Colors.black : Colors.grayDark],
      }),
    };

    const cancelButtonStyle: ViewAnimatedStyles = {
      maxWidth: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
      }),
      transform: [
        {
          translateX: blurFocusAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          }),
        },
      ],
    };

    const widthInput = inputLayout ? inputLayout.width : 0;
    const widthPlaceholder = placeholderFalseLayout ? placeholderFalseLayout.width : 0;

    const placeholderLeftValue = (widthInput - widthPlaceholder) / 2;

    const falsePlaceholderStyle: ViewAnimatedStyles = {
      opacity: blurFocusAnimation.interpolate({
        inputRange: [0, 0.99, 1],
        outputRange: [1, 1, 0],
      }),
      left: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [placeholderLeftValue, 0],
      }),
    };

    return (
      <View>
        <Input
          onLayout={this.setSizeInput}
          ref={(ref: TextInput) => (this.inputRef = ref)}
          placeholder={hasInputFocus ? placeholder : ""}
          style={inputStyle}
          onFocus={() => this.handleInputFocus(false)}
          onBlur={() => this.handleInputFocus(true)}
          value={inputText}
          onChangeText={(inputText: string) => this.setState({inputText})}
          hasFocus={hasInputFocus}
        />
        <FalsePlaceholder
          onLayout={this.setSizeText}
          style={falsePlaceholderStyle}
          activeOpacity={1}
          onPress={() => this.inputRef?.focus()}
        >
          <FalsePlaceholderText numberOfLines={1} hasInputText={inputText !== ""}>
            {inputText ? inputText : placeholder}
          </FalsePlaceholderText>
        </FalsePlaceholder>
        <EraseButton name="times-circle" size={20} style={eraseButtonStyle} color={Colors.white} />
        <TouchableOpacity onPress={this.handleCancelButton}>
          <CancelButton style={cancelButtonStyle} hasFocus={hasInputFocus}>
            <CancelButtonText numberOfLines={1}>{cancelText}</CancelButtonText>
          </CancelButton>
        </TouchableOpacity>
      </View>
    );
  }
}
