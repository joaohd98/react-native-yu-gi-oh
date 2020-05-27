import React from "react";
import {connect} from "react-redux";
import {DetailsCardScreenProps} from "./model/props";
import {Animated, ScrollView} from "react-native";
import {DetailsCardScreenState} from "./model/state";
import {StatesReducers} from "../../redux/reducers";
import {DetailsCardImage} from "./components/image";
import {DetailsCardName} from "./components/name";
import {DetailsCardType} from "./components/type";
import {DetailsCardDescription} from "./components/description";
import {Container} from "../../components/container";
import {DetailsCardId} from "./components/id";
import {DetailsCardArchetype} from "./components/archetype";
import {DetailsCardStyles} from "./styles";
import {DetailsCardAtkDef} from "./components/atk-def";
import {DetailsCardLevel} from "./components/level";

export class DetailsCard extends React.Component<DetailsCardScreenProps, DetailsCardScreenState> {
  state: DetailsCardScreenState = {
    animationScroll: new Animated.Value(0),
    selectedCard: this.props.cards?.find(({id}) => id === this.props.route?.params.cardId!)!,
  };

  render() {
    const {animationScroll, selectedCard} = this.state;
    const {View, Item} = DetailsCardStyles;
    const animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: animationScroll,
            },
          },
        },
      ],
      {useNativeDriver: false}
    );

    return (
      <Container>
        <DetailsCardName image={selectedCard.getImage("big")} animationScroll={animationScroll} />
        <ScrollView scrollEventThrottle={25} onScroll={animatedEvent}>
          <DetailsCardImage
            image={selectedCard.getImage("big")}
            animationScroll={animationScroll}
          />
          <View>
            <Item>
              <DetailsCardId id={selectedCard.id} />
            </Item>
            {selectedCard.level !== undefined && (
              <Item>
                <DetailsCardLevel level={selectedCard.level} />
              </Item>
            )}
            <Item>
              <DetailsCardType
                race={selectedCard.race}
                raceImage={selectedCard.getRaceImage()}
                attribute={selectedCard.attribute}
                attributeImage={selectedCard.getAttributeImage()}
                type={selectedCard.type}
                typeImage={selectedCard.getTypeImage()}
              />
            </Item>
            <Item>
              <DetailsCardDescription description={selectedCard.desc} />
            </Item>
            {selectedCard.archetype && (
              <Item>
                <DetailsCardArchetype archetype={selectedCard.archetype} />
              </Item>
            )}
            {selectedCard.atk && selectedCard.def && (
              <Item>
                <DetailsCardAtkDef atk={selectedCard.atk} def={selectedCard.def} />
              </Item>
            )}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state: StatesReducers): DetailsCardScreenProps => ({
  cards: state.ShowCardScreen.cards,
});

const mapDispatchToProps = null;

export const DetailsCardScreen = connect(mapStateToProps, mapDispatchToProps)(DetailsCard);
