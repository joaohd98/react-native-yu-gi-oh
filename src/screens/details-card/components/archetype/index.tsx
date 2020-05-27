import React from "react";
import {DetailsCardArchetypeStyles} from "./styles";

interface Props {
  archetype: string;
}

interface State {}

export class DetailsCardArchetype extends React.Component<Props> {
  state: State = {};

  render() {
    const {View, Icon, Text, TextCaption} = DetailsCardArchetypeStyles;
    const {archetype} = this.props;

    return (
      <View>
        <Icon name={"building"} />
        <TextCaption>Archetype:</TextCaption>
        <Text>{archetype}</Text>
      </View>
    );
  }
}
