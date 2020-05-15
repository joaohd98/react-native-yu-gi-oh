import React from "react";
import {ShowCardsInputSearchStyles} from "./styles";

export class ShowCardsInputSearch extends React.PureComponent {
  render() {
    const {View, Input, EraseButton, CancelButton} = ShowCardsInputSearchStyles;

    return (
      <View>
        <Input />
        <EraseButton />
        <CancelButton />
      </View>
    );
  }
}
