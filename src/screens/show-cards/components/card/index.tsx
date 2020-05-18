import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCardStyles} from "./styles";
import {TouchableOpacity} from "react-native";

interface Props {
  key: string;
  image: string;
  style?: ViewAnimatedStyles;
}

interface State {
  test: undefined;
}

export class ShowCardsListCard extends React.Component<Props, State> {
  render() {
    const {View, Image, ViewText, TextName, ViewIcons, IconButton, Icon} = ShowCardsListCardStyles;
    const {image} = this.props;

    return (
      <View>
        <TouchableOpacity>
          <Image resizeMode={"stretch"} source={{uri: image}} />
        </TouchableOpacity>
        <ViewText>
          <TextName>A Cell Breeding Device</TextName>
          <TextName>A Cell Breeding Device</TextName>
          <TextName>A Cell Breeding Device</TextName>
          <TextName>A Cell Breeding Device</TextName>
          <TextName>A Cell Breeding Device</TextName>
        </ViewText>
        <ViewIcons>
          <IconButton>
            <Icon name={"heart"} />
          </IconButton>
          <IconButton>
            <Icon name={"info"} />
          </IconButton>
        </ViewIcons>
      </View>
    );
  }
}
