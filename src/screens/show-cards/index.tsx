import React from "react";
import {View} from "react-native";
import {ShowCardsInputSearch} from "./components/input-search";
import {ShowCardsList} from "./components/list-cards";
import {Services} from "../../services/services";

export class ShowCardsScreen extends React.PureComponent {
  componentDidMount() {
    Services.getAllCard().then(
      value => {
        console.log(value.response![0]);
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <View>
        <ShowCardsInputSearch />
        <ShowCardsList />
      </View>
    );
  }
}
