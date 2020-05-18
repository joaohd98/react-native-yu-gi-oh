import {Animated, Dimensions, FlatList, FlatListProps, View, ViewProps} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";
import {ShowCardsListStyles} from "./styles";
import {Icon} from "react-native-vector-icons/Icon";

interface Props {
  test?: undefined;
}

interface State {
  test: undefined;
}

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
    const {List} = ShowCardsListStyles;
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
    );
  }
}
