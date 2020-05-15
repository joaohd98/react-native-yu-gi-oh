import React from "react";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";

export class ShowCardsScreen extends React.PureComponent {
  render() {
    return (
      <View>
        <ShowCardsInputSearch />
      </View>
    );
  }
}
