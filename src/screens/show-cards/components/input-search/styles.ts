import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated, TextInput, TouchableOpacity} from "react-native";

const AnimatedIcon = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const ShowCardsInputSearchStyles = {
  View: styled.View`
    background-color: ${Colors.headerColor};
    flex-direction: row;
  `,
  ViewInput: styled.View`
    flex: 1;
    height: 50px;
  `,
  Input: styled(AnimatedTextInput)`
    width: 95%;
    border: 1px solid ${Colors.grayLight};
    border-radius: 10px;
    padding: 5px;
    background-color: ${Colors.grayLight};
    font-size: 18px;
    margin: 2.5%;
    opacity: 1;
  `,
  FalsePlaceholder: styled(AnimatedTouchableOpacity)`
    position: absolute;
    opacity: 0;
  `,
  FalsePlaceholderText: styled(Animated.Text)`
    font-size: 18px;
  `,
  EraseButton: styled(AnimatedIcon)`
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 18px;
    color: ${Colors.grayDark};
    width: 20px;
    height: 20px;
    z-index: 100;
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
