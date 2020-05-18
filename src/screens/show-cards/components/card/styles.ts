import styled from "styled-components/native";
import {HelperStyles} from "../../../../helpers/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated} from "react-native";
import {Colors} from "../../../../theme/colors";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const ShowCardsListCardStyles = {
  Container: styled.View`
    background-color: ${Colors.grayLight};
  `,
  View: styled.View`
    flex: 1;
    background-color: ${Colors.backgroundColor};
    padding: 5px;
    margin-horizontal: 5px;
    flex-direction: row;
  `,
  Image: styled.Image`
    width: ${HelperStyles.getPercentSizePage("width", 30)};
    height: ${HelperStyles.getPercentSizePage("height", 20)};
  `,
  ViewText: styled.View`
    flex: 1;
    justify-content: center;
    padding-horizontal: 5px;
  `,
  TextName: styled.Text`
    font-weight: 700;
    font-size: 18px;
  `,
  ViewIcons: styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  `,
  IconButton: styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border: 1px solid ${Colors.white};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.white};
  `,
  Icon: styled(AnimatedIcon)`
    font-size: 20px;
  `,
};
