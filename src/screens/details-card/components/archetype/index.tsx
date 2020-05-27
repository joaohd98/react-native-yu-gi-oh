import React from "react";
import {DetailsCardArchetypeStyles} from "./styles";

interface Props {
  archetype: string;
}

interface State {}

export class DetailsCardArchetype extends React.Component<Props> {
  state: State = {};

  render() {
    const {View, ViewImage, Icon, Text, TextCaption} = DetailsCardArchetypeStyles;
    const {archetype} = this.props;

    return (
      <View>
        <ViewImage>
          <Icon name={"building"} />
        </ViewImage>
        <TextCaption>Archetype:</TextCaption>
        <Text>{archetype}</Text>
      </View>
    );
  }
}
