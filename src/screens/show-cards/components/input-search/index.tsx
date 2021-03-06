import React from "react";
import {ShowCardsInputSearchStyles} from "./styles";
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  TextInput,
  TouchableOpacity,
  Vibration,
} from "react-native";
import {InputAnimatedStyles, ViewAnimatedStyles} from "../../../../helpers/animated-types";
import Icon from "react-native-vector-icons/FontAwesome";
import {Colors} from "../../../../theme/colors";

interface Props {
  text: string;
  onChangeText: (text: string) => void;
}

interface State {
  blurFocusAnimation: Animated.Value;
  inputText: string;
  hasInputFocus: boolean;
}

export class ShowCardsInputSearch extends React.Component<Props, State> {
  state: State = {
    blurFocusAnimation: new Animated.Value(0),
    hasInputFocus: false,
    inputText: this.props.text,
  };

  inputRef: TextInput | null = null;
  inputLayout?: LayoutRectangle = undefined;
  placeholderFalseLayout?: LayoutRectangle = undefined;

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    const {inputText} = this.state;

    if (prevState.inputText !== inputText) {
      this.props.onChangeText(inputText);
    }
  }

  handleInputFocus = (isFocused: boolean) => {
    const toValue = isFocused ? 0 : 1;

    const animation = Animated.timing(this.state.blurFocusAnimation, {
      toValue,
      duration: 100,
      useNativeDriver: false,
    });

    const setState = (callback = () => {}) => this.setState({hasInputFocus: !!toValue}, callback);

    if (toValue === 1) {
      animation.start(() => setState());
    } else {
      setState(() => animation.start());
    }
  };

  handleCancelButton = () => {
    this.inputRef?.blur();
  };

  setSizeInput = (event: LayoutChangeEvent) => {
    if (this.inputLayout === undefined && event.nativeEvent.layout.width > 0) {
      this.inputLayout = event.nativeEvent.layout;
    }
  };

  setSizeText = (event: LayoutChangeEvent) => {
    this.placeholderFalseLayout = event.nativeEvent.layout;
  };

  getEraseLayout = () => {
    const {EraseButton} = ShowCardsInputSearchStyles;

    const {hasInputFocus, inputText} = this.state;

    const eraseInput = () => {
      Vibration.vibrate(50);
      this.setState({inputText: ""});
    };

    const hasEraseButton = hasInputFocus && inputText !== "";

    return (
      hasEraseButton && (
        <EraseButton onPress={eraseInput}>
          <Icon size={20} color={Colors.grayDark} name="times-circle" />
        </EraseButton>
      )
    );
  };

  getInputLayout = () => {
    const {ViewInput, Input, FalsePlaceholder, FalsePlaceholderText} = ShowCardsInputSearchStyles;
    const {blurFocusAnimation, inputText, hasInputFocus} = this.state;

    const widthInput = this.inputLayout ? this.inputLayout.width : 0;
    const widthPlaceholder = this.placeholderFalseLayout ? this.placeholderFalseLayout.width : 0;

    const placeholderLeftValue = (widthInput - widthPlaceholder) / 2;
    const placeholder = "Search for your card...";

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
      <ViewInput>
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
        {this.getEraseLayout()}
      </ViewInput>
    );
  };

  getCancelButton = () => {
    const {CancelButton, CancelButtonText} = ShowCardsInputSearchStyles;

    const {blurFocusAnimation} = this.state;

    const cancelButtonStyle: ViewAnimatedStyles = {
      marginRight: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      maxWidth: blurFocusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
      }),
      transform: [
        {
          translateX: blurFocusAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [25, 0],
          }),
        },
      ],
    };

    return (
      <TouchableOpacity onPress={this.handleCancelButton}>
        <CancelButton style={cancelButtonStyle}>
          <CancelButtonText numberOfLines={1}>Close</CancelButtonText>
        </CancelButton>
      </TouchableOpacity>
    );
  };

  render() {
    const {View} = ShowCardsInputSearchStyles;

    return (
      <View>
        {this.getInputLayout()}
        {this.getCancelButton()}
      </View>
    );
  }
}
