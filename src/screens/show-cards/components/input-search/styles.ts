import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";

export const ShowCardsInputSearchStyles = {
  View: styled.View`
    background-color: ${Colors.headerColor};
    padding: 10px;
  `,
  Input: styled.TextInput`
    border: 1px solid ${Colors.grayLight};
    border-radius: 10px;
    padding: 10px;
    background-color: ${Colors.grayLight};
  `,
  EraseButton: styled.TouchableOpacity``,
  CancelButton: styled.TouchableOpacity``,
};
