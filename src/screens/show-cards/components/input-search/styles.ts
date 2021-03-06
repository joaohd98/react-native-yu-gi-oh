import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import {Animated, TextInput, TouchableOpacity} from "react-native";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const ShowCardsInputSearchStyles = {
  View: styled.View`
    background-color: ${Colors.headerColor};
    flex-direction: row;
  `,
  ViewInput: styled.View`
    flex: 1;
  `,
  Input: styled(AnimatedTextInput)`
    border: 1px solid ${Colors.grayLight};
    border-radius: 10px;
    padding: 5px;
    background-color: ${Colors.grayLight};
    font-size: 18px;
    margin: 2.5%;
  `,
  FalsePlaceholder: styled(AnimatedTouchableOpacity)`
    position: absolute;
    opacity: 0;
  `,
  FalsePlaceholderText: styled(Animated.Text)`
    font-size: 18px;
  `,
  EraseButton: styled(AnimatedTouchableOpacity)`
    position: absolute;
    color: ${Colors.grayDark};
    width: 20px;
    height: 100%;
    z-index: 100;
    justify-content: center;
    align-items: center;
    right: 20px;
    bottom: 0;
  `,
  CancelButton: styled(Animated.View)`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  CancelButtonText: styled(Animated.Text)`
    color: ${Colors.blue};
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  `,
};
