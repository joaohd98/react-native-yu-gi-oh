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
    inputText: "",
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

  getInputLayout = () => {

    return (
      <>
        <Input
          onLayout={this.setSizeInput}
          ref={(ref: TextInput) => (this.inputRef = ref)}
          placeholder={placeholder}
          style={inputStyle}
          onFocus={() => this.handleInputFocus(false)}
          onBlur={() => this.handleInputFocus(true)}
          value={inputText}
          onChangeText={(inputText: string) => this.setState({inputText})}
        />
        <FalsePlaceholder
          onLayout={this.setSizeText}
          activeOpacity={1}
          onPress={() => this.inputRef?.focus()}
        >
          <FalsePlaceholderText numberOfLines={1}>
            {inputText ? inputText : placeholder}
          </FalsePlaceholderText>
        </FalsePlaceholder>
      </>
    )
  }

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
      inputLayout,
      placeholderFalseLayout,
    } = this.state;

    const {placeholder, cancelText} = ShowCardsInputSearchConst;

    const eraseButtonStyle: TextAnimatedStyles = {
      opacity: blurFocusAnimation,
      transform: [
        {
          translateX: blurFocusAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [40, 0],
          }),
        },
      ],
    };

    const cancelButtonStyle: ViewAnimatedStyles = {
      marginRight: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
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

    const inputStyle: InputAnimatedStyles = {
      paddingRight: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
      }),
      paddingLeft: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [placeholderLeftValue, 15],
      }),
    };

    return (
      <View>

        <EraseButton name="times-circle" size={20} style={eraseButtonStyle} color={Colors.white} />
        <TouchableOpacity onPress={this.handleCancelButton}>
          <CancelButton style={cancelButtonStyle}>
            <CancelButtonText numberOfLines={1}>{cancelText}</CancelButtonText>
          </CancelButton>
        </TouchableOpacity>
      </View>
    );
  }
}
