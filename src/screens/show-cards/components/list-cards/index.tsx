import {Animated, Dimensions, TouchableOpacity} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";
import {ShowCardsListStyles} from "./styles";

interface Props {
  test?: undefined;
}

interface State {
  test: undefined;
}

const list = [
  {
    key: "1",
    image: "https://ygoprodeck.com/pics/34541863.jpg",
  },
  {
    key: "2",
    image: "https://ygoprodeck.com/pics/64163367.jpg",
  },
  {
    key: "4",
    image: "https://ygoprodeck.com/pics/91231901.jpg",
  },
  {
    key: "5",
    image: "https://ygoprodeck.com/pics/34541863.jpg",
  },
  {
    key: "6",
    image: "https://ygoprodeck.com/pics/64163367.jpg",
  },
  {
    key: "7",
    image: "https://ygoprodeck.com/pics/91231901.jpg",
  },
];

export class ShowCardsList extends React.Component<Props, State> {
  getAnimationStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const width = (Dimensions.get("window").width / 2) * (isEven ? 1 : -1);
    const animated = new Animated.Value(width);

    Animated.timing(animated, {
      toValue: 0,
      duration: 200,
      delay: 150 * index,
      useNativeDriver: true,
    }).start();

    const viewStyle: ViewAnimatedStyles = {
      opacity: animated.interpolate({
        inputRange: isEven ? [0, width] : [width, 0],
        outputRange: isEven ? [1, 0] : [0, 1],
      }),
      transform: [
        {
          translateX: animated,
        },
      ],
    };

    return viewStyle;
  };

  getSeparatorComponent = () => {
    const {Separator} = ShowCardsListStyles;

    return <Separator />;
  };

  render() {
    const {
      List,
      FullImageContainer,
      FullImageButton,
      FullImageIcon,
      FullImage,
    } = ShowCardsListStyles;

    return (
      <>
        <List
          data={list}
          ItemSeparatorComponent={this.getSeparatorComponent}
          renderItem={({item, index}) => (
            <ShowCardsListCard
              key={item.key}
              image={item.image}
              style={this.getAnimationStyle(index)}
            />
          )}
        />
        <FullImageContainer>
          <FullImageButton>
            <FullImageIcon name={"times-circle"} />
          </FullImageButton>
          <FullImage source={{uri: list[0].image}} resizeMode={"contain"} />
        </FullImageContainer>
      </>
    );
  }
}
