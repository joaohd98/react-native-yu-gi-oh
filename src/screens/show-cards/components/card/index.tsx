import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCardStyles} from "./styles";
import {Image} from "react-native";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";

interface Props {
  isLoading: boolean;
  style: ViewAnimatedStyles;
  setRef: (ref: Image) => void;
  onOpenImage: () => void;
  cardContent?: AllCardsResponse;
}

export class ShowCardsListCard extends React.Component<Props> {
  renderTypeRow = () => {
    const {
      ViewText,
      TextName,
      TextID,
      ViewTypeCard,
      ImageType,
      TextType,
      ImageEquip,
    } = ShowCardsListCardStyles;
    const {isLoading, cardContent} = this.props;
    const attributeImage = {uri: cardContent?.getAttributeImage()};
    const raceImage = {uri: cardContent?.getRaceImage()};

    return (
      <ViewText>
        <TextName isLoading={isLoading} numberOfLines={1}>
          {cardContent?.name}
        </TextName>
        <TextID isLoading={isLoading} numberOfLines={1}>
          ID: {cardContent?.id}
        </TextID>
        <ViewTypeCard>
          <ImageType
            isLoading={isLoading}
            source={{uri: cardContent?.getTypeImage()}}
            resizeMode={"contain"}
          />
          <TextType isLoading={isLoading}>{cardContent?.type}</TextType>
          <ImageEquip isLoading={isLoading} source={attributeImage} resizeMode={"contain"} />
          <ImageEquip isLoading={isLoading} source={raceImage} resizeMode={"contain"} />
        </ViewTypeCard>
      </ViewText>
    );
  };
  render() {
    const {Container, View, Image, IconButton, Icon} = ShowCardsListCardStyles;
    const {style, isLoading, cardContent, setRef, onOpenImage} = this.props;

    return (
      <Container>
        <View style={style}>
          <Image
            isLoading={isLoading}
            setRef={ref => setRef(ref)}
            onPress={onOpenImage}
            resizeMode={"stretch"}
            source={{uri: cardContent?.getImage("small")}}
          />
          {this.renderTypeRow()}
          <IconButton isLoading={isLoading}>
            <Icon name={"info"} />
          </IconButton>
        </View>
      </Container>
    );
  }
}
