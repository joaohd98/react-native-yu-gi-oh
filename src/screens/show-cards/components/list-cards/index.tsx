import {Animated, Dimensions, FlatList, View} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";

interface Props {
  test?: undefined;
}

interface State {
  test: undefined;
}

export class ShowCardsListCards extends React.Component<Props, State> {
  getAnimationStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const width = Dimensions.get("window").width * (isEven ? 1 : -1);
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

  render() {
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
        key: "3",
        image: "https://ygoprodeck.com/pics/91231901.jpg",
      },
    ];

    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <ShowCardsListCard
            key={item.key}
            image={item.image}
            style={this.getAnimationStyle(index)}
          />
        )}
      />
    );
  }
}
