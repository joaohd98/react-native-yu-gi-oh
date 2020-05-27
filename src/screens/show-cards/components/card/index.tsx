import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCardStyles} from "./styles";
import {View} from "react-native";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";
import {images} from "../../../../theme/images";

interface Props {
  isLoading: boolean;
  style: ViewAnimatedStyles;
  setRef: (ref: View) => void;
  onOpenImage: () => void;
  goDetails: (cardId: number) => void;
  cardContent: AllCardsResponse;
}

export class ShowCardsListCard extends React.Component<Props> {
  renderTypeRow = () => {
    const {
      ViewNameLevel,
      TextName,
      ViewLevel,
      ImageLevel,
      TextLevel,
      ViewTypeCard,
      ImageType,
      TextType,
      ImageEquip,
      TextAtkDef,
    } = ShowCardsListCardStyles;
    const {isLoading, cardContent} = this.props;
    const attributeImage = {uri: cardContent?.getAttributeImage()};
    const raceImage = {uri: cardContent?.getRaceImage()};

    return (
      <>
        <ViewNameLevel>
          <TextName isLoading={isLoading} numberOfLines={1}>
            {cardContent?.name}
          </TextName>
          <ViewLevel>
            {(cardContent?.level !== undefined || isLoading) && (
              <>
                <ImageLevel
                  isLoading={isLoading}
                  source={cardContent?.level ? images.level : {uri: undefined}}
                />
                <TextLevel isLoading={isLoading}>{cardContent?.level}</TextLevel>
              </>
            )}
          </ViewLevel>
        </ViewNameLevel>
        <ViewTypeCard>
          <ImageType
            isLoading={isLoading}
            source={{uri: cardContent?.getTypeImage()}}
            resizeMode={"contain"}
          />
          <TextType numberOfLines={1} isLoading={isLoading}>
            {cardContent?.type}
          </TextType>
          {(cardContent?.attribute !== undefined || isLoading) && (
            <ImageEquip isLoading={isLoading} source={attributeImage} resizeMode={"contain"} />
          )}
          {(cardContent?.race !== undefined || isLoading) && (
            <ImageEquip isLoading={isLoading} source={raceImage} resizeMode={"contain"} />
          )}
        </ViewTypeCard>
        <TextAtkDef isLoading={isLoading}>{cardContent?.getAtkDefText()}</TextAtkDef>
      </>
    );
  };

  render() {
    const {Container, View, Image, IconButton, ViewContent, Icon} = ShowCardsListCardStyles;
    const {style, isLoading, cardContent, setRef, onOpenImage, goDetails} = this.props;

    return (
      <Container>
        <View style={style}>
          <Image
            isLoading={isLoading}
            setRef={ref => setRef(ref)}
            onPress={onOpenImage}
            resizeMode={"stretch"}
            source={{uri: cardContent?.getImage("big")}}
          />
          <ViewContent>{this.renderTypeRow()}</ViewContent>
          <IconButton isLoading={isLoading} onPress={() => goDetails(cardContent.id)}>
            <Icon name={"plus"} />
          </IconButton>
        </View>
      </Container>
    );
  }
}
