import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCardStyles} from "./styles";
import {Image, TouchableOpacity} from "react-native";

interface Props {
  key: string;
  image: string;
  style: ViewAnimatedStyles;
  setRef: (ref: Image) => void;
  onOpenImage: () => void;
}

interface State {
  loading: boolean;
}

export class ShowCardsListCard extends React.Component<Props, State> {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  }

  render() {
    const {
      Container,
      View,
      Image,
      ViewText,
      TextName,
      ViewIcons,
      IconButton,
      Icon,
    } = ShowCardsListCardStyles;

    const {image, style, setRef, onOpenImage} = this.props;

    return (
      <Container>
        <View style={style}>
          <TouchableOpacity onPress={onOpenImage}>
            <Image ref={ref => setRef(ref)} resizeMode={"stretch"} source={{uri: image}} />
          </TouchableOpacity>
          <ViewText>
            <TextName isLoading={this.state.loading}>A Cell Breeding Device</TextName>
            <TextName isLoading={this.state.loading}>A Cell Breeding Device</TextName>
            <TextName>A Cell Breeding Device</TextName>
            <TextName>A Cell Breeding Device</TextName>
            <TextName>A Cell Breeding Device</TextName>
          </ViewText>
          <ViewIcons>
            <IconButton>
              <Icon name={"info"} />
            </IconButton>
          </ViewIcons>
        </View>
      </Container>
    );
  }
}
