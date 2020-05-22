import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCardStyles} from "./styles";
import {Image} from "react-native";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";

interface Props {
  key: string;
  isLoading: boolean;
  style: ViewAnimatedStyles;
  setRef: (ref: Image) => void;
  onOpenImage: () => void;
  cardContent?: AllCardsResponse;
}

export class ShowCardsListCard extends React.Component<Props> {
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
    const {style, isLoading, cardContent, setRef, onOpenImage} = this.props;

    return (
      <Container>
        <View style={style}>
          <Image
            isLoading={isLoading}
            ref={ref => setRef(ref)}
            onPress={onOpenImage}
            resizeMode={"stretch"}
            source={{uri: cardContent?.getImage("small")}}
          />
          <ViewText>
            <TextName isLoading={isLoading}>{cardContent?.name}</TextName>
          </ViewText>
          <ViewIcons>
            <IconButton isLoading={true}>
              <Icon name={"info"} />
            </IconButton>
          </ViewIcons>
        </View>
      </Container>
    );
  }
}
