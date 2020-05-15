import React from "react";
import {ShowCardsInputSearchStyles} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export class ShowCardsInputSearch extends React.PureComponent {
  render() {
    const {View, Input, EraseButton, CancelButton} = ShowCardsInputSearchStyles;

    return (
      <View>
        <Input />
        <Icon name="rocket" size={30} color="#900" />
        <EraseButton />
        <CancelButton />
      </View>
    );
  }
}
