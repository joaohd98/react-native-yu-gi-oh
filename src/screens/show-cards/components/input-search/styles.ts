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
  Input: styled(AnimatedTextInput)`
    flex: 1;
    width: 100%;
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
    right: 90px;
    top: 18px;
    font-size: 18px;
    color: ${Colors.grayDark};
    width: 20px;
    height: 20px;
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
