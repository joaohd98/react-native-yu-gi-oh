import React from "react";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";
import {ShowCardsList} from "./components/list-cards";

export class ShowCardsScreen extends React.PureComponent {
  render() {
    return (
      <View>
        {/*<ShowCardsInputSearch />*/}
        <ShowCardsList />
      </View>
    );
  }
}
