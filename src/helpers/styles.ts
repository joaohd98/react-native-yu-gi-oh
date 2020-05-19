import {Dimensions, StyleProp, TextStyle} from "react-native";

export class HelperStyles {
  static getPercentSizePage = (type: "width" | "height", number: number): string => {
    const {width, height} = Dimensions.get("window");
    const value = type === "width" ? width : height;

    return `${value * (number / 100)}px`;
  };

  static getPropertyOfStyle<T>(styles: StyleProp<TextStyle>, property: string, defaultValue: T): T {
    let result = defaultValue;

    if (styles) {
      (styles as TextStyle[]).forEach(style => {
        if (style[property]) {
          result = style[property];
        }
      });
    }

    return result;
  }
}
