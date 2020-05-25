import {Dimensions, StyleProp, TextStyle} from "react-native";

export class HelperStyles {
  static getPercentSizePage = (
    type: "width" | "height",
    number: number,
    typeExtraValue: "min" | "max" | undefined = undefined,
    extraValue = 0
  ): string => {
    const {width, height} = Dimensions.get("window");
    let value = (type === "width" ? width : height) * (number / 100);

    if (typeExtraValue === "min") {
      value = value > extraValue ? value : extraValue;
    } else if (typeExtraValue === "max") {
      value = value < extraValue ? value : extraValue;
    }

    return `${value}px`;
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
