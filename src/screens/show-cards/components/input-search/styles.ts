import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated, TextInput, TouchableOpacity} from "react-native";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const ShowCardsInputSearchStyles = {
  View: styled.View`
    background-color: ${Colors.headerColor};
    flex-direction: row;
  `,
  Input: styled(AnimatedTextInput)<{hasInputText: boolean}>`
    flex: 1;
    width: 100%;
    border: 1px solid ${Colors.grayLight};
    border-radius: 10px;
    padding: 5px 30px 5px 5px;
    background-color: ${Colors.grayLight};
    font-size: 18px;
    margin: 2.5%;
    opacity: 1;
    color: ${props => (props.hasInputText ? Colors.black : Colors.grayDark)};
  `,
  FalsePlaceholder: styled(AnimatedTouchableOpacity)`
    position: absolute;
    padding: 5px;
    margin: 2.5%;
  `,
  FalsePlaceholderText: styled(Animated.Text)<{hasInputText: boolean}>`
    font-size: 18px;
    color: ${props => (props.hasInputText ? Colors.black : Colors.grayDark)};
  `,
  EraseButton: styled(AnimatedIcon)`
    position: absolute;
    top: 17px;
    right: 85px;
  `,
  CancelButton: styled(Animated.View)<{hasFocus: boolean}>`
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
